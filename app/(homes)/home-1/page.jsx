import Header1 from "@/components/headers/Header4";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-2/Hero";
import Integretion from "@/components/homes/home-1/Integretion";
import Facts from "@/components/homes/home-1/Facts";
import KeyFeatures from "@/components/homes/home-3/KeyFeatures";
import Pricing from "@/components/common/Pricing";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Brands3 from "@/components/common/Brands2";
import Cta from "@/components/homes/home-3/Cta";
import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title:
    "Galactic Technologies | Custom Web & App Development Company",
  description:
    "Galactic Technologies is a leading IT company founded in 2015, offering custom website, app, theme, and full-stack development services to help your business grow online.",
};
export default function HomePage1() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Integretion />
          <KeyFeatures />
          <Facts />
          <Pricing />
          <Timeline />
          <Feedback />
          <div
                      id="clients_brands"
                      className="clients-brands section panel overflow-hidden"
                    >
                      <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
                        <h5
                          className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                        >
                          Trusted by well-known brands.
                        </h5>
                        <div
                          className="block-panel panel"
                          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                        >
                          <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                            <Brands3 />
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
