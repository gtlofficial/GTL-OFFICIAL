"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { portfolioData } from "@/data/portfolio-data";

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section className="py-5 py-xl-8" style={{ paddingTop: '3rem' }}>
      <div className="container">
       
        <div className="text-center mb-6 mb-lg-8">
          <span className="text-primary mb-2 d-block text-uppercase fw-semibold ls-xl">
            Our Portfolio
          </span>
          <h2 className="display-5 mb-3">
            Our Latest <span className="text-gradient-primary">Work</span>
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '500px' }}>
            Check out some of our latest projects across various platforms and technologies
          </p>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5 mb-lg-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`btn btn-sm px-3 py-2 ${filter === category 
                ? 'btn-primary shadow-sm' 
                : 'btn-outline-primary hover-lift'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-4">
              <div className="card dark:bg-black p-2 overflow-hidden border-0 shadow-sm hover-lift">
                <div className="card-img-top overflow-hidden position-relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid w-100 transition-scale" 
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-black text-white p-1 dark:bg-primary">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-2">{item.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <a 
                      href={item.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-outline-primary px-3"
                    >
                      View Live
                      <i className="bi bi-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-6">
            <div className="mb-4">
              <i className="bi bi-folder-x display-4 text-muted"></i>
            </div>
            <h4 className="mb-3">No projects found in this category</h4>
            <p className="text-muted mb-4">
              We don't have any projects in the {filter} category yet, but check back soon!
            </p>
            <button 
              onClick={() => setFilter('All')} 
              className="btn btn-primary px-4"
            >
              <i className="bi bi-grid-fill me-2"></i> View All Projects
            </button>
          </div>
        )}

        {filteredItems.length > 0 && (
          <div className="text-center mt-6 mt-lg-8">
            <div className="bg-primary bg-opacity-10 p-4 p-lg-5 rounded-4">
              <h3 className="mb-3">Like what you see?</h3>
              <p className="text-muted mb-4">
                Let's work together on your next project
              </p>
              <button className="btn btn-primary px-4">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .transition-scale {
          transition: transform 0.3s ease;
        }
        .card:hover .transition-scale {
          transform: scale(1.05);
        }
        .text-gradient-primary {
          background: linear-gradient(90deg, #fe8f00,rgb(247, 171, 72));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;