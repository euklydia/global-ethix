"use client";

import React from "react";
import clsx from "clsx";
import {
  Component,
  PropsWithAriaLabel,
  PropsWithClassName,
  PropsWithCTA,
  PropsWithStyle,
} from "../../../../common";
import { GlowTextBody, GlowTextBodySmall } from "../../atoms";
import { GlowClickable, GlowClickableWithRightIcon } from "../cta";
import { Accordion } from "./Accordion";
import { GlowAccordion } from "./GlowAccordion";

type GlowLinksAccordionProps = {
  title: string;
  contents: Accordion[];
  isCollapsible: boolean;
};

/**
 * This component is used to display the footer accordion.
 * A component that renders an accordion.
 * @param title - The title of the accordion.
 * @param contents - The contents of the accordion.
 * @param isCollapsible - A boolean that determines if the accordion is collapsible.
 */
export const GlowLinksAccordion: Component<GlowLinksAccordionProps> = ({
  title,
  contents,
  isCollapsible,
}) => {
  return (
    <GlowAccordion
      title={title}
      contents={contents}
      isCollapsible={isCollapsible}
      containerClassName={"flex flex-col flex-1 py-1.5 desktopS:py-0"}
      titleClassName={"text-text-primary-inverse-fixed"}
      itemsContainerClassName={"gap-1"}
      itemContainerClassName={"first:pt-1"}
      TitleComponent={LinksAccordionTitle}
      ItemComponent={LinksAccordionItem}
      isTitleBold={true}
    />
  );
};

type LinksAccordionTitleProps = PropsWithStyle &
  PropsWithAriaLabel &
  PropsWithClassName &
  PropsWithCTA & {
    label: string;
    labelColor?: string;
    isCollapsible?: boolean;
    isCollapsed?: boolean;
    showArrow?: boolean;
  };

const LinksAccordionTitle: Component<LinksAccordionTitleProps> = ({
  style,
  className,
  ariaLabel,
  label,
  labelColor,
  isCollapsible = false,
  isCollapsed = false,
  showArrow,
  ...props
}) => {
  if (!isCollapsible) {
    return (
      <GlowTextBody
        text={label}
        fontWeight={"bold"}
        color={"primary-inverse-fixed"}
        className={"text-wrap line-clamp-2 desktopS:line-clamp-1"}
      />
    );
  }

  return (
    <GlowClickableWithRightIcon
      content={{
        labelElement: (
          <GlowTextBody
            text={label}
            fontWeight={"bold"}
            color={"primary-inverse-fixed"}
            className={"text-wrap text-left line-clamp-2 desktopS:line-clamp-1"}
            TagName={"span"}
          />
        ),
      }}
      className={clsx("fill-text-primary-inverse", className)}
      rightIcon={"chevronDown"}
      iconClassName={clsx(
        "duration-moderate1 ease-linear",
        isCollapsed && "rotate-180"
      )}
      {...props}
    />
  );
};

const LinksAccordionItem: Component<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  return (
    <GlowClickable
      href={href}
      content={{
        labelElement: (
          <GlowTextBodySmall
            text={label}
            className={"text-wrap line-clamp-1 hover:underline"}
            color={"secondary-inverse-fixed"}
          />
        ),
      }}
    />
  );
};
