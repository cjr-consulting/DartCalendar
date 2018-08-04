using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace DartCalendar.Integration.Tests.Helpers
{
    public class Json 
    {
        public static JsonSerializerSettings GetSettings()
        {
            return new JsonSerializerSettings 
            { 
                ContractResolver = new CamelCasePropertyNamesContractResolver() 
            };
        }
    }
}