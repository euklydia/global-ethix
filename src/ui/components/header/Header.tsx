"use client";

import React from "react";
import { GlowClickable } from "../molecules";
import { GlowIcon, GlowTextBody, GlowTextCaption, GlowTitle } from "../atoms";
import { getIcon, Icons, useLanguage } from "../../../libs";
import { GlowCTA } from "../molecules/cta/GlowCTA";
import { MainNavbar } from "./MainNavbar";
import { LangueSwitcher } from "./LangueSwitcher";
import { UIBurgerMenuButton } from "../menu";
import { MainNavbarMobile } from "./MainNavbarMobile";

export const Header = () => {
  const { content } = useLanguage();
  const switcher = () => {
    console.log("");
  };

  return (
    <header className="fixed w-full z-[10000] top-0">
      <nav className="box-shadow flex relative px-1 desktopS:px-3 py-1 bg-background-l0 justify-between">
        <div className="flex gap-1 items-center">
          <GlowIcon name={"logo"} width={"176px"} height={"50px"} />
          <MainNavbar menus={content.navLinks.menus} />
        </div>

        <div className="flex gap-1 items-center ">
          <div className="gap-1 items-center hidden desktopS:flex">
            <div className="w-[2px] h-[1.25rem] bg-background-skeleton"></div>
            {content.navLinks.submenus.map((elem) => (
              <GlowClickable
                key={elem.id}
                href={elem.link}
                content={{
                  labelElement: (
                    <GlowTextCaption
                      color={"tertiary"}
                      text={elem.title}
                      TagName="span"
                    />
                  ),
                }}
                className="p-0.5"
              />
            ))}
            <div className="w-[2px] h-[50%] bg-background-skeleton"></div>
          </div>
          <div className="hidden desktopS:block">
            <LangueSwitcher />
          </div>

          <MainNavbarMobile menus={content.navLinks.menus} />
        </div>
      </nav>
    </header>
  );
};
