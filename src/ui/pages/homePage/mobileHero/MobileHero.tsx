"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import "./style.css";
import { GlowTitle } from "@/ui/components";
import clsx from "clsx";

export const MobileHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isClosed, setIsclosed] = useState(false);

  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
  ];

  const handleDragStart = (e) => {
    sliderRef.current.startX = e.clientX || e.touches[0].clientX;
    sliderRef.current.startScroll = sliderRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!sliderRef.current.startX) return;
    const x = e.clientX || e.touches[0].clientX;
    const walk = x - sliderRef.current.startX;
    sliderRef.current.scrollLeft = sliderRef.current.startScroll - walk;
  };

  const handleDragEnd = () => {
    sliderRef.current.startX = null;
    sliderRef.current.startScroll = null;
    const newIndex = Math.round(
      sliderRef.current.scrollLeft / (sliderRef.current.offsetWidth / 2)
    );
    setCurrentIndex(Math.max(0, Math.min(newIndex, slides.length - 1)));
  };

  return (
    <div
      className="mobile-slider-container"
      ref={sliderRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`mobile-slide relative h-[70vh] ${
            index === currentIndex ? "active" : ""
          }`}
          style={{
            transform: `translateX(${-currentIndex * 50}%)`,
            flex: isClosed ? "0 0 100%" : "0 0 50%",
          }}
        >
          <Image
            src={`/04.jpg`} // Local image path in the public folder
            alt="Example Image"
            style={{ width: "100%", height: "100%" }}
            layout="responsive"
            width={16} // Aspect ratio width
            height={9} // Aspect ratio height
            className="img"
          />
          {/* flex */}
          <div
            style={{
              transform: isClosed ? "translateY(0)" : "translateY(40vh)",
              height: "calc(100% - 86px)",
              bottom: 0,
              justifyContent: isClosed ? "justify-center" : "justify-start",
            }}
            className="absolute left-0 gap-0.5 bottom-0 right-0 bg-background-l0 flex  flex-col items-center p-1"
          >
            <GlowTitle
              text={"Un groupe conseil différent dans un monde nouveau"}
              fontSize="title3"
              className="mt-1"
            />
            <p className="text-text-primary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates ipsum, accusamus doloremque officiis illum, aperiam
              vero cumque minima corporis beatae deleniti laborum soluta commodi
              velit fuga? Eius ex non reiciendis!
            </p>
            <button className="Stripe">
              <span className="Text relative z-[2] text-text-primary-inverse-fixed">
                Explorez{" "}
              </span>
              <svg
                className="Arrow relative z-[2]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
                ></path>
              </svg>
              <svg
                className="Arrow-Hover relative z-[2]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>

            <div
              className="sl--content-btn content-reveal-btn absolute top-0.5 right-1"
              onClick={() => setIsclosed(!isClosed)}
            >
              <svg
                className={clsx(
                  "card-nav-gfx w-[24px] h-[24px]",
                  isClosed ? "sl--close-card-info" : "sl--show-card-info"
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 113.63 113.63"
              >
                <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
              </svg>
            </div>
          </div>

          <div className="absolute"></div>
        </div>
      ))}
    </div>
  );
};
