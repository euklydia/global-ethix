import React from "react";
import { Component } from "../../../../common";
import { GlowTypography } from "./GlowTypography";
import { GlowTypographyProps } from "./GlowTypographyProps";

export const GlowTextCallout: Component<GlowTypographyProps> = ({
  ...props
}) => {
  return (
    <GlowTypography
      fontSize={"callout"}
      fontWeight={"bold"}
      textDecoration={"none"}
      {...props}
    />
  );
};
