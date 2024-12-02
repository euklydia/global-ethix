import React from "react";
import { Component } from "../../../../common";
import { GlowTypography } from "./GlowTypography";
import { GlowTypographyProps } from "./GlowTypographyProps";

export const GlowTextBodySmall: Component<GlowTypographyProps> = ({
  fontSize = "bodySmall",
  ...props
}) => {
  return <GlowTypography fontSize={"bodySmall"} {...props} />;
};
