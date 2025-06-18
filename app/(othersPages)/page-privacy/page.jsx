import Header6 from "@/components/headers/Header6";

import Footer2 from "@/components/footers/Footer2"; 
import Privacy from "@/components/otherPages/Privacy";
export const metadata = {
  title:
    "Privacy Policy || GTL Web Solutions",
  description:
    "Learn how GTL Web Solutions collects, uses, and protects your personal data. Review our privacy practices to stay informed and secure while using our services.",
};
export default function PrivacyPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
        <div id="wrapper" className="wrap"> 
          <Privacy />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
