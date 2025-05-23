import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";

import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/features/Cta";
import FilterGallery from "@/components/homes/home-1/FilterGallery";
export const metadata = {
  title:
    "Our Work | Projects by Galactic Technologies",
  description:
    "GTL - Discover our portfolio of successfully delivered websites, apps, and digital solutions. Galactic Technologies brings creativity and performance to every project.",
};
export default function WorkPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <FilterGallery />
          <Faq />
          <Testimonials />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
