using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DQC.Comics.OrderForm.Startup))]
namespace DQC.Comics.OrderForm
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
