import { ecom_development } from "@/data/core-services";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function ecomdevelopment() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-100 xl:max-w-xl mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >             
              <h2 className="title h3 lg:h2 xl:h1 m-0 px-2">
                  <span className="d-inline-flex px-1 bg-primary dark:bg-secondary text-secondary dark:text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                   Ecommerce 
                  </span>{" "}
                  Development
                </h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 xl:fs-4 text-opacity-70">
                At GTL Web Solutions, we specialize in building high-quality, performance-driven websites tailored to your business needs and budget. Whether you require a clean landing page, a dynamic e-commerce platform, or a custom web application, our experienced team is equipped to deliver scalable and secure solutions using the latest technologies and frameworks. We focus on creating fast, responsive, and visually engaging websites that not only look great but also drive real results for your brand.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-0 col-match justify-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {ecom_development.map((item, index) => (
                <div key={index} className={item.order}>
                  <div
                    className={`features-item vstack justify-between items-center gap-6 xl:gap-8 p-4 xl:p-6 rounded-1-5 ${
                      item.bgClass || ""
                    }`}
                  >
                    <div className="icon-box w-100px h-100px rounded-1-5 cstack bg-secondary">
                      <Image
                        className="w-100px xl:w-100px text-white"
                        src={item.iconSrc}
                        width={24}
                        height={24}
                        alt={item.alt}
                        data-uc-svg=""
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack items-center gap-1">
                        <h3 className="title h5 xl:h4 m-0">{item.title}</h3>
                        <p className="desc fs-7 xl:fs-6 text-opacity-70 text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
