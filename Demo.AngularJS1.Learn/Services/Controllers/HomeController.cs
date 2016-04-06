using System.Web.Mvc;

namespace Services.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

		public ActionResult Exceptions()
        {
            return View();
        }

	    public ActionResult Products()
	    {
		    return View();
	    }
    }
}