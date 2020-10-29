using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThaniyasApp.Services.ApiConfig
{
    public interface IApiConfiguration
    {
        Task<string> GetApiConfiguration();
    }
}
