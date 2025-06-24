"use client";
import { reviews, slidesData } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      id="clients_feedback"
      className="clients-feedback section panel  scrollSpysection"
    >
      <div className="section-outer panel mx-0 py-6 lg:py-8 xl:py-10 bg-secondary dark:bg-gray-900 dark:text-white text-black rounded-2 lg:rounded-3 m-2">
        <div className="container p-0 max-w-100">
          <div
            className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Clients feedback
                </span>
              </div>
              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black dark:text-white">
                Don't{" "}
                <span className="d-inline-flex px-1 bg-primary text-secondary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  just take our words
                </span>{" "}
                for it!
              </p>
            </div>
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
            <div className="panel w-100 mask-x">
              <Swiper
                className="swiper"
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                speed={10000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0, // Negative delay is not valid, setting to 0 for continuous autoplay
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                breakpoints={{
                  1024: {
                    // Adjust according to your responsive design
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="panel vstack justify-between gap-1 p-1 lg:p-2 xl:p-3 bg-white text-black rounded-1-5 h-100">
                      <div className="panel vstack items-start gap-1 lg:gap-2">
                         <div class="panel hstack gap-1 mt-2 lg:mt-4">
                        <div className="rating d-flex gap-0">
                          {Array.from({ length: slide.rating }).map((_, i) => (
                            <Image
                              className="icon icon-1"
                              alt="star"
                              data-uc-svg=""
                              key={i}
                              src="/assets/images/star.svg"
                              width="24"
                              height="25"
                            />
                          ))}
                        </div>
                        <Image
                        className="w-128px text-gray-900 dark:text-white image-filter"
                        src={slide.brandImgSrc}
                        alt="Brand"
                        width={100}
                        height={20}
                        data-uc-svg=""
                        />
                        </div>
                        <p className="fs-5 lg:fs-4">“{slide.quote}”</p>
                      </div>
                      <div className="panel mt-2 lg:mt-2">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{slide.name}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {slide.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="swiper mt-2 lg:mt-3"
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                speed={10000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0, // Negative delay is not valid, setting to 0 for continuous autoplay
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                breakpoints={{
                  1024: {
                    // Adjust according to your responsive design
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                style={{
                  transform: "rotate(180deg)",
                }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide
                    style={{ transform: "rotate(180deg)" }}
                    className="swiper-slide"
                    key={index}
                  >
                    <div className="panel vstack justify-between gap-1 p-1 lg:p-2 xl:p-3 bg-white text-black rounded-1-5 h-100">
                      <div className="panel vstack items-start gap-1 lg:gap-2">
                         <div class="panel hstack gap-1 mt-2 lg:mt-4">
                        <div className="rating d-flex gap-0">
                          {[...Array(5)].map((_, starIndex) => (
                            <Image
                              key={starIndex}
                              className="icon icon-1"
                              alt="star"
                              data-uc-svg=""
                              src="/assets/images/star.svg"
                              width="24"
                              height="25"
                            />
                          ))}
                        </div>
                        <Image
                        className="w-128px text-gray-900 dark:text-white image-filter"
                        src={review.brandImgSrc}
                        alt="Brand"
                        width={100}
                        height={20}
                        data-uc-svg=""
                        />
                        </div>
                        <p className="fs-5 lg:fs-4">{review.feedback}</p>
                      </div>
                      <div className="panel mt-2 lg:mt-2">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{review.name}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {review.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              </div>
              <a
                href="#"
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                style={{
                  transform: "translateY(0.0097341px)",
                  opacity: "0.999797",
                }}
              >
                <span>See all feedbacks</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </a>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
