using System.Web.Mvc;

namespace CustomDirective.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

	    public ActionResult ScopeControl()
	    {
		    return View();
	    }

	    public ActionResult Transclusion()
	    {
		    return View();
	    }

	    public ActionResult DirectiveControllers()
	    {
		    return View();
	    }

	    public ActionResult CustomForms()
	    {
		    return View();
	    }
    }
}