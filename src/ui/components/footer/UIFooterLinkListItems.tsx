"use client";

import React from "react";
import { Accordion, GlowDivider, GlowLinksAccordion } from "../../components";
import { Component } from "../../../common";
import { useTailwindBreakpoint } from "../../../hooks";

type UIFooterLinkListItemsProps = {
  links: {
    id: string;
    title: string;
    links: Accordion[];
  }[];
};

export const UIFooterLinkListItems: Component<UIFooterLinkListItemsProps> = ({
  links,
}) => {
  const isDesktop = useTailwindBreakpoint("desktopS");

  return links.map(({ id, title, links }) => (
    <li key={id} className={"flex flex-col flex-1"}>
      <GlowLinksAccordion
        title={title}
        contents={links}
        isCollapsible={!isDesktop}
      />
      {!isDesktop && <GlowDivider />}
    </li>
  ));
};
