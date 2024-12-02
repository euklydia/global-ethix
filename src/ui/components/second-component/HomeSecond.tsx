import React from "react";
import { GlowClickable } from "../molecules";
import { GlowTextBody, GlowTitle } from "../atoms";

export const HomeSecond = () => {
  return (
    <div className="flex flex-col flex-wrap desktopS:flex-row w-full gap-1 desktopS:gap-2 p-2 justify-center">
      <div className="flex items-center w-[100%] gap-1">
        <GlowTitle
          text="Avec la collaboration de partenaires de choix"
          fontSize={"title3"}
          TagName="h3"
          className="flex flex-1"
        />
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

      <div className="flex flex-1 items-center">
        <GlowTextBody
          className="text-justify "
          text="Le recours à des ressources humaines, expérimentées et qualifiées, externalisées en Afrique du Nord, permet d’offrir ces prestations à haut niveau à un coût très compétitif. Notre partenariat stratégique avec Léger, leader nord-américain de la recherche marketing, nous donne les moyens de proposer des solutions innovantes en termes de pilotage de la gouvernance et de l’expérience client."
        />
      </div>
      <div className="w-full max-w-[652px] m-auto desktopS:w-[524px]  order-[-1] desktopS:order-1">
        <img
          src="https://via.placeholder.com/524"
          alt="Placeholder"
          className="w-full h-full object-cover aspect-4/3"
        />
      </div>
    </div>
  );
};
