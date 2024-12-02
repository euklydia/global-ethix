import React from "react";
import { GlowClickable } from "../molecules";
import { GlowTextBody, GlowTitle } from "../atoms";

export const ThirdSecond = () => {
  return (
    <div className="flex flex-col desktopS:flex-row w-full gap-1 desktopS:gap-2 p-2 justify-center">
      <div className="w-full flex-1 flex max-w-[652px] m-auto desktopS:w-[424px]  order-[-1] desktopS:order-1">
        <img
          src="https://via.placeholder.com/524"
          alt="Placeholder"
          className="w-full h-full object-cover aspect-1/1"
        />
      </div>
      <div className="flex flex-1 flex-col gap-0.5 desktopS:order-2">
        <GlowTitle
          text="Pour créer de la valeur pour votre organisation Et répondre aux exigences réglementaires et morales issues de la société"
          fontSize={"title3"}
          TagName="h3"
          className="flex flex-1"
        />
        <GlowTitle
          text="réglementaires et morales issues de la société"
          fontSize={"title4"}
          TagName="h3"
          className="flex flex-1"
          color={"tertiary"}
        />
        <GlowTextBody
          className="text-justify "
          text="Le recours à des ressources humaines, expérimentées et qualifiées, externalisées en Afrique du Nord, permet d’offrir ces prestations à haut niveau à un coût très compétitif. Notre partenariat stratégique avec Léger, leader nord-américain de la recherche marketing, nous donne les moyens de proposer des solutions innovantes en termes de pilotage de la gouvernance et de l’expérience client."
        />
        <div className="flex">
          <GlowClickable
            href={"#"}
            className="shiny-cta"
            content={{
              labelElement: (
                <GlowTextBody
                  text="Explorez"
                  className="text-text-primary-inverse"
                />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};
