using System.Web;
using System.Web.Optimization;

namespace ExpenseManager.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            //// Use the development version of Modernizr to develop with and learn from. Then, when you're
            //// ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));


            bundles.Add(new StyleBundle("~/bundles/css").Include(
                "~/Scripts/dist/css/style.min.css",
                "~/Scripts/assets/libs/flot/css/float-chart.css"));


            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                "~/Scripts/assets/libs/jquery/dist/jquery.min.js",
                "~/Scripts/assets/libs/popper.js/dist/umd/popper.min.js",
                "~/Scripts/assets/libs/bootstrap/dist/js/bootstrap.min.js",
                "~/Scripts/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js",
                "~/Scripts/assets/extra-libs/sparkline/sparkline.js",
                "~/Scripts/dist/js/waves.js",
                "~/Scripts/dist/js/sidebarmenu.js",
                "~/Scripts/dist/js/custom.min.js",
                "~/Scripts/assets/libs/flot/excanvas.js",
                "~/Scripts/assets/libs/flot/jquery.flot.js",
                "~/Scripts/assets/libs/flot/jquery.flot.pie.js",
                "~/Scripts/assets/libs/flot/jquery.flot.time.j",
                "~/Scripts/assets/libs/flot/jquery.flot.stack.js",
                "~/Scripts/assets/libs/flot/jquery.flot.crosshair.js",
                "~/Scripts/assets/libs/flot.tooltip/js/jquery.flot.tooltip.min.js",
                "~/Scripts/dist/js/pages/chart/chart-page-init.js"));
        }
    }
}
