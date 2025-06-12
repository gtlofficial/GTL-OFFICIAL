import React from "react";
import Link from "next/link";
import Image from "next/image";
import CalendlyButton from "../headers/component/CalendlyButton";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer2() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer p-4 lg:p-6 xl:p-8 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-100">
          <div className="footer-inner vstack gap-1">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-3">
                  <div className="panel vstack items-start gap-1 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <img
                          className=" text-primary"
                          alt="GTL web solutions"
                          src="/assets/images/common/logo-dark.svg"
                        />
                      </Link>
                    </div>
                    <div className="hstack items-start gap-1">
                      <a href="#">
                        <Image
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Google Play Store"
                          data-uc-svg=""
                          src="/assets/images/common/playstore.svg"
                          width="135"
                          height="40"
                        />
                      </a>
                      <a href="#">
                        <Image
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Apple Store"
                          data-uc-svg=""
                          src="/assets/images/common/appstore.svg"
                          width="134"
                          height="40"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 lg:col-3 md:d-none">
                  <div className="panel vstack items-start gap-1">
{/*                 <p className="opacity-80">
                     GTL Web Solutions is a leading IT company founded in 2015, offering custom website, app, theme, and full-stack development services to help your business grow online. To empower businesses and startups by turning ideas into reality with innovative, efficient, and future-ready digital solutions.
                    </p>  */}
                    <CalendlyButton
                className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
              >
                Book An Appointment
              </CalendlyButton>
                  </div>
                </div>
                
                {footerLinks.map((section, index) => (
                  <div key={index} className="col-6 md:col-3 lg:col-2">
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="uc-footer-bottom panel hstack justify-between items-center pt-4 lg:pt-6 border-top dark:text-white">
              <div className="hstack justify-start items-center gap-1 lg:gap-2">
                <p className="opacity-60">
                  GTL © {new Date().getFullYear()}, All rights reserved.
                </p>
              </div>
              <div className="hstack justify-end items-center gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
