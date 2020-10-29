using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using ThaniyasApp.Helper;
using ThaniyasApp.Services.ApiConfig;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace ThaniyasApp.Middlewares
{
    [Authorize]
    public class ApiProxyMiddleware : IMiddleware
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;
        private readonly IApiConfiguration _facilityApi;

        public ApiProxyMiddleware(IHttpClientFactory httpClientFactory, IConfiguration configuration, IApiConfiguration facilityApi)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
            _facilityApi = facilityApi;
        }

        
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            string requestContent;
            try
            {
                using (var receiveStream = context.Request.Body)
                {
                    using (var readStream = new StreamReader(receiveStream, Encoding.UTF8))
                    {
                        requestContent = readStream.ReadToEnd();
                    }
                }

                var client = _httpClientFactory.CreateClient();
                var keyValue = await _facilityApi.GetApiConfiguration();

                using (var newRequest = new HttpRequestMessage(new HttpMethod(context.Request.Method), new Uri($"{Config.ApiUrl}{context.Request.GetEncodedPathAndQuery()}")))
                {

                    var inputObj = JsonConvert.DeserializeObject<object>(requestContent);
                    newRequest.Headers.TryAddWithoutValidation("api-key-value", keyValue);
                    newRequest.Content = new StringContent(requestContent, Encoding.UTF8, "application/json");
                    using (var response = await client.SendAsync(newRequest))
                    {
                        context.Response.StatusCode = (int)response.StatusCode;
                        foreach (var header in response.Headers)
                        {
                            context.Response.Headers[header.Key] = header.Value.ToArray();
                        }

                        foreach (var header in response.Content.Headers)
                        {
                            context.Response.Headers[header.Key] = header.Value.ToArray();
                        }

                        // SendAsync removes chunking from the response. This removes the header so it doesn't expect a chunked response.
                        context.Response.Headers.Remove("transfer-encoding");

                        using (var responseStream = await response.Content.ReadAsStreamAsync())
                        {
                            await responseStream.CopyToAsync(context.Response.Body);
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }

        }
    }
}
