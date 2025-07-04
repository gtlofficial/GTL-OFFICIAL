import Header6 from "@/components/headers/Header6";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import Blogs1 from "@/components/blog/Blogs1";
export const metadata = {
  title:
    "GTL Blog | Shopify Tips, Web Development & Insights",
  description:
    "Stay updated with expert insights from GTL Web Solutions. Explore tips on Shopify, web design, performance, and eCommerce strategies to grow your online brand.",
};
export default function BlogPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
        <div id="wrapper" className="wrap">
          <Blogs1 />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
