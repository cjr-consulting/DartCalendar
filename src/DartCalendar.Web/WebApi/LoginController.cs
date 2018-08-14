namespace DartCalendar.Web.WebApi
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/Login")]
    public class LoginController : Controller
    {
        public IActionResult Get()
        {
            return Json(new
            {
                Username = "user@email.io",
                Id = "1"
            });
        }
    }
}
