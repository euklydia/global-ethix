import React, { PropsWithChildren } from "react";
import { Component, PropsWithIcon } from "../../../../common";
import { GlowIcon } from "../../atoms";
import ChevronDown from "../../../../libs/icons/icons/chevronDown.svg";
import { cva } from "class-variance-authority";
import { tailwindTheme } from "../../../../../tailwind.config";
import clsx from "clsx";

type RightIconShellProps = PropsWithIcon &
  PropsWithChildren & {
    iconClassName?: string;
  };

/**
 * RightIconShell is a component that wraps children with an icon on the right side.
 * It's not part of the Glow - Design System
 * @param Icon - Icon to be displayed on the right side of the children
 * @param children - Children to be wrapped
 * @param iconClassName - Additional styles for the icon
 *
 *
 */

export type IconType = "small" | "medium" | "large" | "fullSize";
const iconTypeToSize = (type: IconType) => {
  switch (type) {
    case "small":
      return {
        height: tailwindTheme.minHeight.iconSmall,
        width: tailwindTheme.minWidth.iconSmall,
      };
    case "medium":
      return {
        height: tailwindTheme.minHeight.iconMedium,
        width: tailwindTheme.minWidth.iconMedium,
      };
    case "large":
      return {
        height: tailwindTheme.minHeight.iconLarge,
        width: tailwindTheme.minWidth.iconLarge,
      };
    default:
      return {};
  }
};
export const RightIconShell: Component<RightIconShellProps> = ({
  Icon,
  children,
  iconClassName,
}) => {
  const tagStyle = cva("", {
    variants: {
      type: {
        small: "min-h-iconSmall min-w-iconSmall",
        medium: "min-h-iconMedium min-w-iconMedium",
        large: "min-h-iconLarge min-w-iconLarge",
        fullSize: "",
      },
    },
    defaultVariants: {
      type: "medium",
    },
  });
  const size = iconTypeToSize("medium");
  return (
    <span
      className={"flex flex-row items-center justify-between w-full gap-0.5"}
    >
      <span className={"flex flex-row items-center h-full gap-0.5"}>
        {children}
      </span>
      <GlowIcon name={Icon} className={iconClassName} />
    </span>
  );
};
