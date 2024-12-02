import React from "react";
import { Component } from "../../../../common";
import { GlowTypography } from "./GlowTypography";
import { GlowTypographyProps } from "./GlowTypographyProps";

export const GlowTextCaption: Component<GlowTypographyProps> = ({
  ...props
}) => {
  return <GlowTypography fontSize={"caption"} {...props} />;
};
