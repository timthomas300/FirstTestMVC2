using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using FirstTestMVC.Models;

namespace FirstTestMVC.Controllers
{
    public class ExampleContactPostsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: ExampleContactPosts
        public ActionResult Index()
        {
            return View(db.ExampleContactPost.ToList());
        }

        // GET: ExampleContactPosts/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ExampleContactPost exampleContactPost = db.ExampleContactPost.Find(id);
            if (exampleContactPost == null)
            {
                return HttpNotFound();
            }
            return View(exampleContactPost);
        }

        // GET: ExampleContactPosts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ExampleContactPosts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,FirstName,LastName,FavoriteAnimal,FavoriteColor")] ExampleContactPost exampleContactPost)
        {
            if (ModelState.IsValid)
            {
                db.ExampleContactPost.Add(exampleContactPost);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(exampleContactPost);
        }

        // GET: ExampleContactPosts/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ExampleContactPost exampleContactPost = db.ExampleContactPost.Find(id);
            if (exampleContactPost == null)
            {
                return HttpNotFound();
            }
            return View(exampleContactPost);
        }

        // POST: ExampleContactPosts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,FirstName,LastName,FavoriteAnimal,FavoriteColor")] ExampleContactPost exampleContactPost)
        {
            exampleContactPost.Time = DateTime.Now;

            if (ModelState.IsValid)
            {
                db.Entry(exampleContactPost).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(exampleContactPost);
        }

        // GET: ExampleContactPosts/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ExampleContactPost exampleContactPost = db.ExampleContactPost.Find(id);
            if (exampleContactPost == null)
            {
                return HttpNotFound();
            }
            return View(exampleContactPost);
        }

        // POST: ExampleContactPosts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ExampleContactPost exampleContactPost = db.ExampleContactPost.Find(id);
            db.ExampleContactPost.Remove(exampleContactPost);
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
