using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FirstTestMVC.Controllers
{
    public class TTController : Controller
    {
        // GET: TT
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Portfolio()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

    }
}