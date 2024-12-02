import React from "react";
import { Component } from "../../../../common";
import { GlowTypography } from "./GlowTypography";
import { GlowTypographyProps } from "./GlowTypographyProps";

export const GlowTextBody: Component<GlowTypographyProps> = ({ ...props }) => {
  return <GlowTypography fontSize={"body"} {...props} />;
};
