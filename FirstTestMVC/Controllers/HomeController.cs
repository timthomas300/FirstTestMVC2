using FirstTestMVC.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace FirstTestMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact([Bind(Include = "Id, Name, Email, Message, Time")] Contact contact)
        {
            contact.Time = DateTime.Now;
            var svc = new EmailService();
            var msg = new IdentityMessage();
            msg.Subject = "Contact From Personal Site!";
            msg.Body = "From: " + contact.Name + "\n" + "Email: " + contact.Email + "\n"+ contact.Message;
            await svc.SendAsync(msg);
            TempData["msgSent"] = "<script>alert('Message sent successfully!');</script>";
            return RedirectToAction("Index", "TT", new { area = "" });
        }
    }
}