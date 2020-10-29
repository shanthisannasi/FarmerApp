using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace ThaniyasApp.Services.ApiConfig
{
    public class DevelopmentApiConfiguration : IApiConfiguration
    {
        private readonly IConfiguration _configuration;

        public DevelopmentApiConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Task<string> GetApiConfiguration()
        {
            return Task.FromResult<string>( _configuration["ApiAppConfig:KeyValue"]);
        }
    }
}