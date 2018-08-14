namespace DartCalendar.Integration.Tests.Helpers
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    public static class Json
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
