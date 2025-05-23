import Header1 from "@/components/headers/Header1";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Integretion from "@/components/homes/home-1/Integretion";
import Facts from "@/components/homes/home-1/Facts";
import Pricing from "@/components/common/Pricing";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/homes/home-3/Cta";
import Footer2 from "@/components/footers/Footer2";
import FilterGallery from "@/components/homes/home-1/FilterGallery";
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
          <FilterGallery />
          <Features />
          <Integretion />
          <Team />
          <Facts />
          <Pricing />
          <Timeline />
          <Feedback />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
