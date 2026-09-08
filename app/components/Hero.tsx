"use client";

import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    tag: "Welcome to SOLO",
    title: "Build Skills. Discover Careers. Learn Your Way.",
    description:
      "SOLO is a career learning platform that helps students and aspiring professionals discover career pathways, develop practical skills, complete projects, and showcase achievements for future opportunities.",
    image: "/image/hero.jpg",
    primaryBtn: "Explore Pathways",
    secondaryBtn: "Start Learning",
  },

  {
    tag: "Discover",
    title: "Discover Your Career Path",
    description:
      "Explore careers aligned with your interests and goals. SOLO helps you understand what skills are needed and how to get there.",
    image: "/images/discover.jpg",
    primaryBtn: "Discover Careers",
    secondaryBtn: "Learn More",
  },

  {
    tag: "Learn",
    title: "Learn Skills That Matter",
    description:
      "Access learning pathways designed to develop industry-relevant knowledge at your own pace.",
    image: "/images/learn.jpg",
    primaryBtn: "Start Learning",
    secondaryBtn: "Browse Pathways",
  },

  {
    tag: "Build",
    title: "Build Through Real Projects",
    description:
      "Apply your knowledge through practical projects that strengthen your portfolio and career readiness.",
    image: "/images/build.jpg",
    primaryBtn: "View Projects",
    secondaryBtn: "Explore Skills",
  },

  {
    tag: "Grow",
    title: "Track Progress and Grow",
    description:
      "Monitor your learning journey, unlock achievements, and continuously improve your skills.",
    image: "/images/grow.jpg",
    primaryBtn: "Track Progress",
    secondaryBtn: "View Achievements",
  },

  {
    tag: "Showcase",
    title: "Showcase Your Journey",
    description:
      "Create a professional learner profile that highlights your projects, skills, achievements, and career growth.",
    image: "/images/showcase.jpg",
    primaryBtn: "Build Profile",
    secondaryBtn: "Success Stories",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div
        className="slides"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide.image}

            <div className="overlay" />

            <div className="hero-content">
              <div className="hero-tag">
                <span className="tag-dot"></span>
                {slide.tag}
              </div>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <div className="hero-buttons">
                <button className="btn-primary">
                  {slide.primaryBtn}
                </button>

                <button className="btn-secondary">
                  {slide.secondaryBtn}
                </button>
              </div>

              <div className="hero-features">
                <span>✓ Discover Career Paths</span>
                <span>✓ Build Real Skills</span>
                <span>✓ Showcase Achievements</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hero-nav prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <button
        className="hero-nav next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="hero-bottom">
        <div className="hero-counter">
          {String(current + 1).padStart(2, "0")} /
          {String(slides.length).padStart(2, "0")}
        </div>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}