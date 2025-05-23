"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { filterGalleryData } from "@/data/filter-gallery";

const FilterGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAboveNav, setIsAboveNav] = useState(true);

  // Filter items based on active filter
  const filteredItems = activeFilter === 'All' 
    ? filterGalleryData 
    : filterGalleryData.filter(item => item.category === activeFilter);

  return (
    <div
      id="filter-gallery"
      className="filter-gallery section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 pb-6 xl:pb-9 bg-secondary dark:bg-gray-800 dark:text-white">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Our Latest Work
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Checkout some of our latest works in various platforms
                </p>
              </div>
              
              <div style={{ flexWrap: 'wrap' }} className="d-flex flex-wrap justify-content-center mb-4 gap-2">
                {['All', 'Bigcommerce', 'React', 'Shopify', 'Squarespace', 'Wordpress', 'Government'].map((filter) => (
                  <button
                    key={filter}
                    className={`btn ${activeFilter === filter ? 'btn-outline-primary' : 'btn-primary'}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="row child-cols-6 lg:child-cols-3 col-match gy-4 lg:gy-8 gx-2 lg:gx-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="vstack gap-2">
                  <div className="card panel bg-transparent dark:bg-gray-900">
                    <img 
                      src={item.image} 
                      className="card-img-top" 
                      alt={item.title}
                      style={{  objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title m-0">{item.title}</h5>
                      <span className="badge">{item.category}</span>
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
};

export default FilterGallery;