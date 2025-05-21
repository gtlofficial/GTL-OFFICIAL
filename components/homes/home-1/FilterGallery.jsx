"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

const FilterGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAboveNav, setIsAboveNav] = useState(true);

  // Sample gallery data
  const galleryItems = [
    { id: 1, title: 'E-commerce Site', category: 'Bigcommerce', image: '/assets/images/filter-gallery/img-01.jpg' },
    { id: 2, title: 'React Dashboard', category: 'React', image: '/assets/images/filter-gallery/img-02.jpg' },
    { id: 3, title: 'Online Store', category: 'Shopify', image: '/assets/images/filter-gallery/img-03.jpg' },
    { id: 4, title: 'Portfolio Website', category: 'Squarespace', image: '/assets/images/filter-gallery/img-04.jpg' },
    { id: 5, title: 'Blog Platform', category: 'Wordpress', image: '/assets/images/filter-gallery/img-05.jpg' },
    { id: 6, title: 'Government Portal', category: 'Government', image: '/assets/images/filter-gallery/img-06.jpg' },
    { id: 7, title: 'Another React App', category: 'React', image: '/assets/images/filter-gallery/img-07.jpg' },
    { id: 8, title: 'Bigcommerce Store', category: 'Bigcommerce', image: '/assets/images/filter-gallery/img-08.jpg' },
  ];

  // Filter items based on active filter
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div
      id="filter-gallery"
      className="filter-gallery section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 pb-6 xl:pb-9 bg-secondary dark:bg-primary dark:text-white">
        <div className="container max-w-lg">
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
              
			  <div className="d-flex flex-wrap justify-content-center mb-4 gap-2">
          {['All', 'Bigcommerce', 'React', 'Shopify', 'Squarespace', 'Wordpress', 'Government'].map((filter) => (
            <button
              key={filter}
              className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
		
            </div>
			
			<div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-4">
              <div className="card h-100 overflow-hidden">
                <img 
                  src={item.image} 
                  className="card-img-top" 
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <span className="badge bg-secondary">{item.category}</span>
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