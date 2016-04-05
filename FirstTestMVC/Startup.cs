using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FirstTestMVC.Startup))]
namespace FirstTestMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
