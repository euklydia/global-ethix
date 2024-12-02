"use client";

import React, { useState } from "react";
import { GlowTextBody, GlowTitle } from "../atoms";
import "./shinyCTA.css";
import { GlowClickable } from "../molecules";
import { GlowCTA } from "../molecules/cta/GlowCTA";

const DEFAULT_TEXT =
  "Un accompagnement intégral, du diagnostic à l’implantation des stratégies, intégrant formation, audit, conseil, communication, branding et relations publiques, destiné à élaborer, améliorer et valoriser la gouvernance responsable des organisations.";
const TITLE = "Une offre de services intégrées en quatre volets";

const ShinyCTAButton = () => {
  return (
    <GlowClickable
      href={"#"}
      className="shiny-cta"
      content={{
        labelElement: (
          <GlowTextBody text="Explorez" className="text-text-primary-inverse" />
        ),
      }}
    />
  );
};

export const FisrtHomeScetion = () => {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [title, setTitle] = useState(TITLE);
  const [subTitle, setSubTitle] = useState("ccc");

  const handleMouseEnter = (sectionText: string) => {
    setText(sectionText);
    setSubTitle("");
  };

  const handleClick = (sectionText: string) => {
    setText(DEFAULT_TEXT);
  };

  return (
    <div className="flex flex-col desktopS:flex-row gap-1.5 p-2 items-center justify-center min-h-[400px]">
      <div className="flex flex-col gap-1">
        {["i", "1", "3"].map((_, index) => (
          <div
            key={index}
            className="h-[50px] w-[350px] bg-[red] m-auto cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Top Left Section")}
            onMouseLeave={() => handleClick("Top Left Section")}
          >
            {index}
          </div>
        ))}
      </div>
      <div className="dynamic-text flex-1 gap-0.5 flex flex-col">
        <GlowTitle text={title} TagName={"h3"} fontSize="title2" />
        <GlowTextBody
          text={title}
          color={"tertiary"}
          TagName={"h3"}
          fontWeight={"bold"}
        />
        <GlowTextBody text={text} className="text-justify" />
        <div className="flex">
          <ShinyCTAButton />
        </div>
      </div>
    </div>
  );
};
