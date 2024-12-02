"use client";

import React from "react";
import clsx from "clsx";
import {
  Component,
  PropsWithAriaLabel,
  PropsWithClassName,
  PropsWithDataLayer,
} from "../../../../common";
import { GlowTextBody } from "../../atoms";
import { GlowClickable } from "../cta";
import { GlowMenuButton } from "../menuButton";
import { Accordion } from "./Accordion";
import { GlowAccordion } from "./GlowAccordion";

type GlowMenuAccordionListItemProps = PropsWithClassName &
  PropsWithDataLayer & {
    title: string;
    href?: string;
    labelColor?: string;
    contents: Accordion[];
    isCollapsible: boolean;
    isTitleBold: boolean;
  };

/**
 * This component is used to display the accordion-style category menu.
 * A component that renders an accordion.
 * @param title - The title of the accordion.
 * @param href - The href of the title.
 * @param labelColor - The color of the title.
 * @param contents - The contents of the accordion.
 * @param isCollapsible - A boolean that determines if the accordion is collapsible.
 * @param isTitleBold - A boolean that determines if the title is bold.
 * @param dataLayerId - The data layer id of the title component.
 * @param dataLayerSubId - The data layer sub-id of the title component.
 * @param className - Additional styles
 */
export const GlowMenuAccordionListItem: Component<
  GlowMenuAccordionListItemProps
> = ({
  title,
  href,
  labelColor,
  contents,
  isCollapsible,
  isTitleBold,
  dataLayerId,
  dataLayerSubId,
  className,
}) => {
  return (
    <GlowAccordion
      title={title}
      href={href}
      labelColor={labelColor}
      contents={contents}
      isCollapsible={isCollapsible}
      titleClassName={clsx(
        "bg-surface-primary p-1 desktop:hover:underline",
        className
      )}
      itemContainerClassName={"bg-surface-primary desktop:hover:underline"}
      TitleComponent={GlowMenuButton}
      ItemComponent={MenuAccordionItem}
      isTitleBold={isTitleBold}
      containerClassName={
        "desktop:w-menuAccordionItemContainer overflow-hidden"
      }
      ContainerTagName={"li"}
      dataLayerId={dataLayerId}
      dataLayerSubId={dataLayerSubId}
    />
  );
};

type MenuAccordionItemProps = PropsWithClassName &
  PropsWithAriaLabel &
  PropsWithDataLayer & {
    label: string;
    labelColor?: string;
    href: string;
    dataLayerClassName?: string;
  };

const MenuAccordionItem: Component<MenuAccordionItemProps> = ({
  label,
  labelColor,
  href,
  className,
  ariaLabel,
  dataLayerId,
  dataLayerSubId,
  dataLayerClassName,
}) => {
  return (
    <GlowClickable
      className={clsx(
        "flex-1",
        "px-2 py-0.75 desktop:px-0 desktop:py-0.5",
        className,
        dataLayerClassName
      )}
      ariaLabel={ariaLabel}
      href={href}
      dataLayerId={dataLayerId}
      dataLayerSubId={dataLayerSubId}
      content={{
        labelElement: (
          <GlowTextBody
            text={label}
            className={"text-wrap text-left"}
            style={{ color: labelColor }}
          />
        ),
      }}
    />
  );
};
