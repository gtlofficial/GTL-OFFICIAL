"use client";

import { testimonialslist } from "@/data/testimonials-list";
import React, { useState } from "react";
import Image from "next/image";

export default function Feedback() {
  const INITIAL_COUNT = 12;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  const hasMore = visibleCount < testimonialslist.length;
  const hasExtraShown = visibleCount > INITIAL_COUNT;

  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-100">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                Some clients feedbacks
              </h2>

              <div
                className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 justify-center col-match g-2 lg:g-3"
                data-uc-grid=""
              >
                {testimonialslist.slice(0, visibleCount).map((testimonial, index) => (
                  <div key={index}>
                    <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border">
                      <div className="panel vstack items-start gap-2">
                        <div className="panel">
                          <div className="hstack h-48px">
                            <Image
                              className="w-128px text-gray-900 dark:text-white image-filter"
                              src={testimonial.brandImgSrc}
                              width={170}
                              height={48}
                              alt={testimonial.brandImgAlt}
                              data-uc-svg=""
                            />
                          </div>
                        </div>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="panel hstack gap-2 mt-2 lg:mt-4">
                        <div className="panel vstack items-start gap-0">
                          <h6 className="h6 m-0">{testimonial.name}</h6>
                          <span className="fs-7 opacity-70">
                            {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-3 mt-4">
                {hasMore && (
                  <button
                    onClick={handleLoadMore}
                    className="btn btn-primary mx-2"
                  >
                    Load More
                  </button>
                )}
                {hasExtraShown && (
                  <button
                    onClick={handleShowLess}
                    className="btn btn-primary mx-2"
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
