using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using FirstTestMVC.Models;
using SendGrid;
using System.Configuration;
using System.Net.Mail;

namespace FirstTestMVC.Controllers
{
    [Authorize (Roles = "Admin")]
    public class ContactsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Contacts
        public ActionResult Index()
        {
            return View(db.Contact.ToList());
        }

        // GET: Contacts/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact contact = db.Contact.Find(id);
            if (contact == null)
            {
                return HttpNotFound();
            }
            return View(contact);
        }

        // GET: Contacts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Contacts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Email,PhoneNumber,Message")] Contact contact)
        {
            contact.Time = DateTime.Now;

            //Create the email object first, then add the properties.
            SendGridMessage myMessage = new SendGridMessage();
            //Configuration Manager allows one to connect to the web config file, which in turn is connected to private.config
            myMessage.AddTo(ConfigurationManager.AppSettings["ContactEmail"]); 
            myMessage.From = new MailAddress(contact.Email, contact.Name);
            myMessage.Subject = "New Personal Contact Email";
            myMessage.Text = contact.Message;
            //Create a Web transport, using API Key
            var transportWeb = new Web(ConfigurationManager.AppSettings["APIKey"]);
            //Send the email.
            transportWeb.DeliverAsync(myMessage);

            if (ModelState.IsValid)
            {
                db.Contact.Add(contact);
                db.SaveChanges();
                return RedirectToAction("Index", "Home");
            }

            return View(contact);
        }

        // GET: Contacts/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact contact = db.Contact.Find(id);
            if (contact == null)
            {
                return HttpNotFound();
            }
            return View(contact);
        }

        // POST: Contacts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Email,PhoneNumber,Message")] Contact contact)
        {
            contact.Time = DateTime.Now;

            if (ModelState.IsValid)
            {
                db.Entry(contact).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(contact);
        }

        // GET: Contacts/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact contact = db.Contact.Find(id);
            if (contact == null)
            {
                return HttpNotFound();
            }
            return View(contact);
        }

        // POST: Contacts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Contact contact = db.Contact.Find(id);
            db.Contact.Remove(contact);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
