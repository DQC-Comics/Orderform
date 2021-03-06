﻿using System.Web;
using System.Web.Optimization;

namespace DQC.Comics.OrderForm
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));
            bundles.Add(new ScriptBundle("~/bundles/customscript").Include(
                      "~/Scripts/maps.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-resource.js",
                      "~/Scripts/angular.rangeSlider.js",
                      "~/Scripts/angular-animate.js",
                      "~/Scripts/angular-ui/ui-bootstrap-tpls.js"));

            bundles.Add(new ScriptBundle("~/bundles/verbalexpressions").Include(
                      "~/Scripts/verbalexpressions.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/angular_rangeSlider.css",
                      "~/Content/site.css"));
            bundles.Add(new ScriptBundle("~/bundles/orderform").Include(
                      "~/Scripts/OrderForm/orderForm.js",
                      "~/Scripts/OrderForm/Controllers/heroController.js",
                      "~/Scripts/OrderForm/Controllers/orderController.js",
                      "~/Scripts/OrderForm/Factories/heroes.js",
                      "~/Scripts/OrderForm/Factories/orders.js"));
        }
    }
}
