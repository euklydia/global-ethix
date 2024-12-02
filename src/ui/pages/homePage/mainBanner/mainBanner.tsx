"use client";

import { useLanguage } from "../../../../libs";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./styles.css";
import { GlowTextBody, GlowTextBodySmall, GlowTitle } from "@/ui/components";
import clsx from "clsx";

const heroData = [
  {
    id: "01",
    title: "Un groupe conseil différent dans un monde nouveau",
    subtitle: "Façonner ensemble un avenir durable",
    img: "04.jpg",
    description:
      "La raison d’être de GlobalEthix est d’accompagner les entreprises et les gouvernements dans l’adoption d’une gouvernance responsable, garante d’une approche durable qui reflète les préoccupations de la société. Au service d’entreprises et de gouvernements partout dans le monde depuis plus de 20 ans, les experts de GlobalEthix excellent tant dans les métiers techniques de l’ESG que dans les métiers créatifs de la communication. Leur union dans GlobalEthix crée une force inégalée.",
  },
  {
    id: "02",
    title: "Un partenariat stratégique mondial",
    subtitle: "Des stratégies fondées sur des données fiables",
    img: "04.jpg",
    description:
      "GlobalEthix annonce un partenariat stratégique mondial avec l’entreprise canadienne Léger, leader francophone en intelligence de marché, recherche marketing et sondages. Ce partenariat permettra d’offrir des outils d’analyse avancés aidant les organisations à mieux anticiper les enjeux ESG dans leurs stratégies et à bien comprendre les attentes de leurs parties prenantes.",
  },
  {
    id: "03",
    title: "Soyez prêts pour les nouvelles réglementations avec l’ESG1000",
    subtitle: "Une expertise exclusive de GlobalEthix",
    img: "04.jpg",
    description:
      "L’ESG1000 est une norme certifiable qui propose un cadre de gouvernance efficace pour l’ensemble de vos pratiques RSE en matière d’environnement, d’impact sociétal et de gouvernance (ESG). Les experts de GlobalEthix en sont des spécialistes et vous aideront à la mettre en œuvre au sein de votre organisation.",
  },
  {
    id: "04",
    title: "Un réseau international",
    subtitle: "Europe Afrique Amériques Moyen-Orient",
    img: "04.jpg",
    description:
      "Présent dans 12 pays au moment de sa fondation, GobalEthix aspire à étendre son réseau. Participez au mouvement!",
  },
];

export const MainBanner = () => {
  const { content } = useLanguage();
  const [sliderVisible, setSliderVisible] = useState<boolean>(true);
  const [isFinishedSliding, setIsFinishedSliding] = useState<boolean>(false);
  const [snapScrollY, setSnapScrollY] = useState(0);
  // Use ref to track current slide index
  const currentSlideRef = useRef<number>(0);
  const sliderRef = useRef<HTMLElement | null>(null);
  const totalSlidesRef = useRef<number>(0); // Keep track of total slides
  const slideHeightRef = useRef<number>(0); // Store slide height

  useEffect(() => {
    if (isFinishedSliding)
      window.scrollTo({
        top: snapScrollY,
        behavior: "smooth",
      });
  }, [isFinishedSliding]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = document.querySelectorAll(
      ".slide"
    ) as NodeListOf<HTMLElement>;
    totalSlidesRef.current = slides.length;
    slideHeightRef.current = window.innerHeight;

    const goToSlide = (slideIndex: number) => {
      if (slideIndex < 0) slideIndex = 0;
      if (slideIndex >= totalSlidesRef.current)
        slideIndex = totalSlidesRef.current - 1;

      // Update slider transform for smooth scrolling
      slider.style.transition = "transform 0.5s ease-out"; // Smooth transition
      slider.style.transform = `translateX(-${slideIndex * 100}vw)`;

      // Update the current slide ref
      currentSlideRef.current = slideIndex;
    };

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      const slideHeight = slideHeightRef.current;
      const totalSlideHeight = slideHeight * totalSlidesRef.current;
      const snapScrollY = totalSlideHeight; // 420vh for 4 slides of 100vh each

      // Debounce scroll handling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Determine the target slide index based on scroll position
        const slideIndex = Math.floor(scrollY / slideHeight);

        // Ensure the slider stays within bounds and isn't jumping
        if (slideIndex !== currentSlideRef.current) {
          goToSlide(slideIndex);
        }

        // When scrolling within the slides
        if (scrollY < slideHeight * totalSlidesRef.current) {
          setSliderVisible(true);
          setIsFinishedSliding(false);
        }

        // Once the last slide is reached, allow the content to scroll normally
        if (scrollY >= slideHeight * totalSlidesRef.current) {
          setSliderVisible(false);
          setSnapScrollY(snapScrollY);
          setIsFinishedSliding(true);

          // No need to lock scroll position, let it scroll into the content section
        }
      }, 50); // Delay to debounce fast scrolling, adjust as needed
    };

    goToSlide(0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="slider-container"
        className={clsx(
          "hidden bg-text-primary fixed h-fullViewport",
          sliderVisible ? "desktopS:flex" : "hidden"
        )}
      >
        <div
          ref={sliderRef}
          className="slider"
          style={{ display: "flex", width: "100vw" }}
        >
          {/* Render slides here */}
          {heroData.map((hero) => (
            <div
              className={clsx("slide w-fullViewport h-fullViewport relative")}
              key={hero.id}
            >
              <Image
                src={`/${hero.img}`} // Local image path in the public folder
                alt="Example Image"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
                width={16} // Aspect ratio width
                height={9} // Aspect ratio height
                className="img"
              />
              <div
                className={clsx(
                  "absolute w-half flex flex-col gap-0.25 left-2"
                )}
              >
                <GlowTitle
                  text={hero.title}
                  fontSize={"title3"}
                  TagName="h3"
                  color={"primary-inverse-fixed"}
                />
                <GlowTitle
                  text={hero.subtitle}
                  color={"tertiary-inverse-fixed"}
                  fontSize={"title5"}
                  className="pl-0.25"
                />
                <GlowTextBody
                  text={hero.description}
                  color={"primary-inverse-fixed"}
                  className="text-justify pl-0.25"
                />
                <div className="pt-0.75 pl-0.25">
                  <button className="Stripe">
                    <span className="Text relative z-[2]">Explorez </span>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
