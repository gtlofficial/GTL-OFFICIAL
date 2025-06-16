import Header6 from "@/components/headers/Header6";

import Footer2 from "@/components/footers/Footer2";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import Blogs from "@/components/homes/home-2/Blogs";
export const metadata = {
  title:
    "Careers at GTL Web Solutions || Join Our Team.",
  description:
    "Explore exciting career opportunities at GTL Web Solutions. Join our expert team of developers and creatives building cutting-edge Shopify and web solutions.",
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
        <div id="wrapper" className="wrap">
          <CareerHero />
          <CareerBenefits />
          <CareerOpenings />
          <Feedback />
          <Brands />
          <Blogs />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
