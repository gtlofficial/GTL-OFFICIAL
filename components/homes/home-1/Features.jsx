"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Brands from "@/components/common/Brands";

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel">
        <div className="container max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            
            <div className="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
              <div
                className="block-panel panel"
                data-anime="opacity: [0, 1]; duration: 450; delay: 750;"
              >
                <div className="element-brands text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-xl mx-auto text-center pt-6 xl:pt-9">
              <h2 className="h3 lg:h2 xl:h1 m-0">
                What we do
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
              We specialize in creating innovative, scalable, and high-quality software solutions tailored to your needs. From eCommerce platforms like Shopify, WordPress, and BigCommerce to mobile app development with React Native, our expertise spans a wide range of technologies. Our frontend skills include HTML, CSS, React, and Angular, while on the backend, we build robust systems using Node.js.
</p>
<p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
With deep experience in Shopify app development using Remix and custom theme creation, we enhance online stores with seamless performance and user-friendly design. Whether you're a startup or a global enterprise, our team delivers precise, reliable solutions that grow with your vision.</p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6  pb-6 xl:pb-9">
              <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                <ul
                  className="main-features-nav hstack text-center overflow-auto"
                  data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                  role="tablist"
                >
                  <li
                    className={`${activeTab == 1 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(1)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">eCommerce Platforms</a>
                  </li>
                  <li
                    onClick={() => setActiveTab(2)}
                    className={`${activeTab == 2 ? "uc-active" : ""}`}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">App Development</a>
                  </li>
                  <li
                    className={`${activeTab == 3 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(3)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">
                      Frontend Technologies
                    </a>
                  </li>
                  <li
                    className={`${activeTab == 4 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(4)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Backend Development</a>
                  </li>
                </ul>
              </div>
              <div
                className="main-features-switcher uc-switcher overflow-hidden"
                role="presentation"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                {activeTab == 1 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Share tools quickly and confidently in minutes"
                              src="/assets/images/template/feature-image-02.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                   Headless, Shopify, React, and more..
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    We build powerful and user-friendly online stores using leading platforms. From custom themes to advanced integrations, we help businesses create seamless shopping experiences that drive conversions.
                                  </p>
                                 <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Connect every part of your entire business"
                              src="/assets/images/template/feature-image-03.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Specializing in React Native
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    We develop cross-platform mobile apps with React Native, ensuring fast performance and a native look and feel on both iOS and Android devices—ideal for startups and enterprises alike.
                                  </p>
                                  <a
                                    href="#"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>See all integrations</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 3 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Maintain compliance and control your apps"
                              src="/assets/images/template/feature-image-01.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    HTML, CSS, React, Angular
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Our team creates visually stunning and highly responsive user interfaces using modern frontend tools. We focus on delivering smooth, interactive, and accessible web experiences.
                                  </p>
                                <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 4 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Review quickly and confidently"
                              src="/assets/images/template/feature-image-04.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Node.js
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    We build robust and scalable server-side applications with Node.js. Our solutions are optimized for performance, security, and easy integration with third-party services and databases.
                                  </p>
                                  <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
