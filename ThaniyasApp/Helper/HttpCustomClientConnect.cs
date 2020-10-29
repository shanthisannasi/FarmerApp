using ThaniyasApp.Models;
using System;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Web;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Threading.Tasks;

namespace ThaniyasApp.Helper
{
    public static class SessionExtensions
    {
        public static void Set<T>(this ISession session, string key, T value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }

        public static T Get<T>(this ISession session, string key)
        {
            var value = session.GetString(key);
            return value == null ? default(T) :
                                  JsonConvert.DeserializeObject<T>(value);
        }
    }

    public class Config
    {
        private static readonly ClientAppSettings _myConfiguration;
        public static string ApiUrl
        {
            get; set;
        }
        //public static string LocalUrl
        //{
        //    get; set;
        //}
        public static int SessionTimeout
        {
            get; set;
        }


        public static string APIKeyValue
        {
            get; set;
        }
        public static bool debugMode
        {
            get; set;
        }

    }

    #region GetHttp
    public class HttpCustomGetClientConnect : HttpClient
    {
        #region GetConstructor
        public HttpCustomGetClientConnect(string address)
        {
            base.BaseAddress = new Uri(address);
           // base.BaseAddress = new Uri(localUrl);
            base.DefaultRequestHeaders.Accept.Clear();
            base.DefaultRequestHeaders.Add("Access-Control-Allow-Origin", "*");
            base.DefaultRequestHeaders.Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
            base.DefaultRequestHeaders.Add("api-key-value", Config.APIKeyValue);
            base.DefaultRequestHeaders.Add("Accept", "application/json");
            base.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        }

        internal Task<HttpResponseMessage> PostAsync(string apiUrl, StringContent stringContent1, string localUrl, StringContent stringContent2)
        {
            throw new NotImplementedException();
        }
        #endregion GetConstructor
    }
    #endregion GetHttp
}
