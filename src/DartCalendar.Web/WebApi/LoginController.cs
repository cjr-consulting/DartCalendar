using System;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DartCalendar.Web.WebApi
{
    [Route("api/Login")]
    public class LoginController : Controller
    {
        public IActionResult Get()
        {
            return Json(new {
                Username = "user@email.io",
                Id = "1"
            });
        }
    }
}