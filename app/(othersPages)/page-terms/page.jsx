import Header6 from "@/components/headers/Header6";

import Footer2 from "@/components/footers/Footer2"; 
import Terms from "@/components/otherPages/Terms";
export const metadata = {
  title:
    "Terms & Conditions || GTL Web Solutions",
  description:
    "Review the terms and conditions for using GTL Web Solutions. Understand our service policies, user responsibilities, and legal guidelines in detail.",
};
export default function TermsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
        <div id="wrapper" className="wrap">
        
          <Terms />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
