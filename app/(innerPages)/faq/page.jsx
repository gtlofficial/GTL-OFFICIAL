import Header6 from "@/components/headers/Header6";
import Footer2 from "@/components/footers/Footer2";
import Faq from "@/components/innerpages/Faq";
import Cta from "@/components/innerpages/Cta";
export const metadata = {
  title:
    "About Us || GTL Web Solutions – Innovators in Digital Development",
  description:
    "GTL - Learn about GTL Web Solutions, founded by Ritesh Dhiman in 2013, dedicated to building powerful digital solutions that drive innovation and growth.",
};
export default function FaqPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
        <div id="wrapper" className="wrap">
          <Faq />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-6 xl:pb-9">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="block-panel panel"
                    data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                  >    
                  </div>
                </div>
              </div>
            </div>
          </div>       
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
