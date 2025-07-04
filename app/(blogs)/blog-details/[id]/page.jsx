import Header6 from "@/components/headers/Header6";
import Newsletter from "@/components/blog/Newsletter";
import Footer2 from "@/components/footers/Footer2";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Blog Details | Insights by GTL Web Solutions.",
  description:
    "Dive deeper into expert articles from GTL Web Solutions. Get detailed insights on Shopify, web development, performance optimization, and digital strategy.",
};
export default async function BlogDetailsPage1(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
        <div id="wrapper" className="wrap">
          <BlogDetails1 blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
