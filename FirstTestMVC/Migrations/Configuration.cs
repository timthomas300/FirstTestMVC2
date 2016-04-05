namespace FirstTestMVC.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FirstTestMVC.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "FirstTestMVC.Models.ApplicationDbContext";
        }

        protected override void Seed(FirstTestMVC.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Admin" };

                manager.Create(role);
            }

            if (!context.Users.Any(u => u.Email == "timthomas300@gmail.com"))
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var user = new ApplicationUser
                {
                    UserName = "timthomas300@gmail.com",
                    Email = "timthomas300@gmail.com",
                    //FirstName = "Timothy",
                    //LastName = "Thomas",
                    //DisplayName = "Timothy"
                };

                manager.Create(user, "Julytt777!");
                manager.AddToRole(user.Id, "Admin");
            }

            if (!context.Users.Any(u => u.Email == "araynor@coderfoundry.com"))
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var user = new ApplicationUser
                {
                    UserName = "ANIVRA",
                    Email = "araynor@coderfoundry.com",
                    //FirstName = "Timothy",
                    //LastName = "Thomas",
                    //DisplayName = "Timothy"
                };

                manager.Create(user, "Abc&123!");

            }
        }
    }
}
