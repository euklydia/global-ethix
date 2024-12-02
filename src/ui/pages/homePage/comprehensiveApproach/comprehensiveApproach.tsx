"use client";

import React, { useState } from "react";
import "../shinyCTA.css";
import {
  GlowClickable,
  GlowTextBody,
  GlowTitle,
  ShinyCTAButton,
} from "../../../components";

const comprehensiveApproachData = {
  title: "Une plateforme transversale Des services adaptés à vos besoins",
  subtitle: "Durabilité, éthique, gouvernance et communication",
  cta: {
    link: "#",
    label: "Explorez",
  },
  img: "https://via.placeholder.com/524",
  description:
    "Le recours à des ressources humaines, expérimentées et qualifiées, externalisées en Afrique du Nord, permet d’offrir ces prestations à haut niveau à un coût très compétitif. Notre partenariat stratégique avec Léger, leader nord-américain de la recherche marketing, nous donne les moyens de proposer des solutions innovantes en termes de pilotage de la gouvernance et de l’expérience client.",
};

export const ComprehensiveApproach = () => {
  return (
    <div className="flex flex-col flex-wrap desktopS:flex-row w-full gap-1 desktopS:gap-2 p-2 justify-center desktopS:pt-[350vh] ">
      {/* <div className="flex items-center w-[100%] gap-1">
        <div>
          <GlowTitle
            text={comprehensiveApproachData.title}
            fontSize={"title3"}
            TagName="h3"
            className="flex flex-1"
          />
          <GlowTitle
            text={comprehensiveApproachData.subtitle}
            fontSize={"title5"}
            TagName="h4"
            className="flex flex-1"
            color={"tertiary"}
          />
        </div>
        <div>
          <ShinyCTAButton
            link={"#"}
            label={comprehensiveApproachData.cta.label}
          />
        </div>
      </div> */}

      <div className="flex flex-col flex-1 gap-0.75">
        <div>
          <GlowTitle
            text={comprehensiveApproachData.title}
            fontSize={"title3"}
            TagName="h3"
            className="flex flex-1"
          />
          <GlowTitle
            text={comprehensiveApproachData.subtitle}
            fontSize={"title5"}
            TagName="h4"
            className="flex flex-1"
            color={"tertiary"}
          />
        </div>
        <GlowTextBody
          className="text-justify "
          text={comprehensiveApproachData.description}
        />
        <div className="flex">
          <ShinyCTAButton
            link={"#"}
            label={comprehensiveApproachData.cta.label}
          />
        </div>
      </div>
      <div className="w-full max-w-[652px] m-auto desktopS:w-[524px]  order-[-1] desktopS:order-1">
        <img
          src={comprehensiveApproachData.img}
          alt="Placeholder"
          className="w-full h-full object-cover aspect-4/3"
        />
      </div>
    </div>
  );
};
