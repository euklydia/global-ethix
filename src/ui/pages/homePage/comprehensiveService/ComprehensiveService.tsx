"use client";

import React, { useState } from "react";
import "../shinyCTA.css";
import {
  GlowClickable,
  GlowTextBody,
  GlowTextBodySmall,
  GlowTitle,
  ShinyCTAButton,
} from "../../../../ui/components";

const DEFAULT_TEXT =
  "Un accompagnement intégral ou des services à la carte, du diagnostic à l’implantation des stratégies, incluant formation, audit, conseil, communication, branding, relations publiques et gouvernementales, destiné à, améliorer et valoriser la gouvernance responsable des organisations.";
const TITLE = "Quatre pôles de services";

// const ShinyCTAButton = () => {
//   return (
//     <GlowClickable
//       href={"#"}
//       className="shiny-cta"
//       content={{
//         labelElement: (
//           <GlowTextBody text="Explorez" className="text-text-primary-inverse" />
//         ),
//       }}
//     />
//   );
// };

export const ComprehensiveService = () => {
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
    <div
      onMouseLeave={() => handleClick("Top Left Section")}
      className="flex flex-col desktopS:flex-row gap-1.5 p-2 items-center justify-center min-h-[450px]"
    >
      <div className="flex flex-col gap-1">
        {/* {[
          "RSE/ESG",
          "Forensic",
          "Relations publiques et gouvernementales",
          "communication - marketing - branding ",
        ].map((elem, index) => (
          <div
            key={index}
            className="group relative overflow-hidden classBefore w-[380px] m-auto cursor-pointer rounded-0.5 py-1 px-1  border-bold  border-solid border-[#ffffff] hover:border-border-brand"
            onClick={() => handleMouseEnter("Top Left Section")}
          >
            <GlowTextBodySmall
              text={elem}
              color={"primary-inverse"}
              fontWeight={"bold"}
              className="relative z-[3] group-hover:text-text-primary"
            />
          </div>
        ))} */}
        <img
          src={"https://via.placeholder.com/524"}
          alt="Placeholder"
          className="w-full h-full object-cover aspect-4/3"
        />
      </div>
      <div className="dynamic-text gap-0.5 flex flex-col flex-1">
        <GlowTitle text={title} TagName={"h3"} fontSize="title2" />
        <GlowTextBody text={text} className="text-justify" />
        <div className="flex">
          <ShinyCTAButton link={"#"} label={"Explorez"} />
        </div>
      </div>
    </div>
  );
};
