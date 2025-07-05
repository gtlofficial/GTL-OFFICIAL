import { plugin_development } from "@/data/core-services";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function plugindevelopment() {
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
                   Plugin 
                  </span>{" "}
                  Development
                </h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 xl:fs-4 text-opacity-70">
                At GTL Web Solutions, we specialize in custom plugin development that enhances the functionality and performance of your website or application. Whether you need to extend features on Shopify, WordPress, or other platforms, our team builds secure, scalable, and seamlessly integrated plugins tailored to your business goals. From payment gateways and booking systems to advanced API integrations and marketing tools, we deliver plugins that are lightweight, user-friendly, and built to perform. Let us help you turn complex needs into simple, smart solutions.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-0 col-match justify-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {plugin_development.map((item, index) => (
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
