import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { Component, PropsWithClassName } from "../../../../common";

type GlowTextsProps = PropsWithChildren &
  PropsWithClassName & {
    TagName?: keyof HTMLElementTagNameMap;
  };

export const GlowTexts: Component<GlowTextsProps> = ({
  children,
  className,
  TagName = "p",
}) => {
  return (
    <TagName className={clsx("whitespace-pre-wrap", className)}>
      {children}
    </TagName>
  );
};
