"use client";

import clsx from "clsx";
import { Component } from "../../../common";
import { UIFooterShell } from "../../layout";
import { UIFooterLinkListItems } from "./UIFooterLinkListItems";
import { InnerHTML, useLanguage } from "../../../libs";
import { GlowDivider, GlowIcon, GlowTextBody, GlowTextCaption } from "../atoms";
import { GlowClickable } from "../molecules";
import { FooterLegalLinks } from "./FooterLegalLinks";
import { SocialMedia } from "./socialMedia";
import { Input } from "./input";

export const Footer: Component = () => {
  const { content } = useLanguage();
  return (
    <UIFooterShell>
      <div className={"bg-background-brand"}>
        <div
          className={clsx(
            "flex flex-col gap-1.5",
            "px-1 pb-1.5 desktopS:px-1.5 desktopS:pt-1.5",
            "bg-background-brand",
            "desktopS:mx-auto desktopS:w-maxWidth"
          )}
        >
          <ul
            className={
              "flex flex-col desktopS:flex-row desktopS:gap-1.5 pt-1.5"
            }
          >
            <GlowIcon name={"whiteLogo"} width={"296px"} height={"100px"} />
            <UIFooterLinkListItems links={content.footer.links} />
            <li
              className={
                "flex flex-col justify-between gap-3 pt-1.5 desktopS:pt-0"
              }
            >
              <div className={"flex flex-col gap-0.5 desktop:gap-1"}>
                <GlowTextBody
                  text={"Restez connectés !"}
                  fontWeight={"bold"}
                  color={"primary-inverse-fixed"}
                  className={"text-wrap"}
                />
                <SocialMedia />
              </div>
            </li>
          </ul>
          <div>
            {/* <GlowTextCaption
              text={"Footer.links.additionalInformation.excludedBrands"}
              fontSize={"caption"}
              color={"secondary-inverse-fixed"}
              TagName={"p"}
              // links={{
              //   brands: { href: ExternalLinks.brandsExcludedFromPromotion },
              // }}
            /> */}
            {/* <GlowTextCaption
              text={"Footer.links.additionalInformation.conditions"}
              fontSize={"caption"}
              color={"secondary-inverse-fixed"}
              TagName={"span"}
              // links={{
              //   beautyTips: { href: buildRoute(locale, "beautyTips") },
              // }}
            /> */}
            {/* <GlowTextCaption
              text={"links.additionalInformation.exclusivity"}
              color={"secondary-inverse-fixed"}
              TagName={"span"}
              className={"flex"}
            /> */}
          </div>
        </div>

        <div className={"bg-background-brand px-1 desktop:px-0"}>
          <GlowDivider />
        </div>
        <div
          className={clsx(
            "flex flex-col desktop:flex-row justify-between desktop:gap-2.5",
            "px-1 py-1.5 desktop:px-1.5",
            "bg-background-brand",
            "desktop:mx-auto desktop:w-maxWidth"
          )}
        >
          <FooterLegalLinks legalLinks={content.footer.legalLinks} />
          {/* {countries.length > 0 && (
            <CountryMenuButton
              className={"pb-1.5 desktopS:pb-0"}
              countries={countries}
              menu={<CountryMenu countries={countries} locale={locale} />}
            />
          )} */}
        </div>
      </div>
    </UIFooterShell>
  );
};
