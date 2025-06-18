import Header6 from "@/components/headers/Header6";

import Footer2 from "@/components/footers/Footer2";
import Notfound from "@/components/otherPages/404";
export const metadata = {
  title:
    "Not Found || GTL Web Solutions",
  description:
    "Not Found - Oops! The page you’re looking for doesn’t exist. Return to the GTL Web Solutions homepage or explore our collections to find what you need.",
};
export default function NotFoundPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
        <div id="wrapper" className="wrap">
           
          <Notfound />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
