import React, { ReactNode } from "react";
import clsx from "clsx";
import {
  Component,
  PropsWithAriaLabel,
  PropsWithClassName,
  PropsWithCTA,
} from "../../../../common";
import { GlowClickable, GlowClickableWithRightIcon } from "../cta";
import { GlowIcon, GlowTextBody } from "../../atoms";

type GlowMenuButton = PropsWithAriaLabel &
  PropsWithClassName &
  PropsWithCTA & {
    iconClassName?: string;
    label: string | ReactNode;
    labelColor?: string;
    Icon?: React.ComponentType<{
      fill?: string;
    }>;
    showArrow?: boolean;
    isCollapsible?: boolean;
    isCollapsed?: boolean;
  };

/**
 * Component called MenuCategories and MenuSubCategories/Head on FIGMA
 */
export const GlowMenuButton: Component<GlowMenuButton> = ({
  className,
  iconClassName,
  ariaLabel,
  label,
  labelColor,
  Icon,
  showArrow = false,
  isCollapsible = false,
  isCollapsed = false,
  ...props
}) => {
  if (!showArrow) {
    return (
      <GlowClickable
        className={clsx("p-1 desktop:px-0 desktop:py-0.5 gap-0.5", className)}
        ariaLabel={ariaLabel}
        content={{
          labelElement: (
            <GlowTextBody
              text={label}
              fontWeight={isCollapsed ? "bold" : "medium"}
              className="text-wrap text-left"
              style={{ color: labelColor }}
              TagName={"span"}
            />
          ),
          icon: Icon && (
            <GlowIcon className={iconClassName} Icon={Icon} type={"large"} />
          ),
        }}
        {...props}
      />
    );
  }
  return (
    <GlowClickableWithRightIcon
      className={clsx("p-1 desktop:px-0 desktop:py-0.5 gap-0.5", className)}
      ariaLabel={ariaLabel}
      content={{
        labelElement: (
          <GlowTextBody
            text={label}
            fontWeight={isCollapsed ? "bold" : "medium"}
            className="text-wrap text-left"
            style={{ color: labelColor }}
            TagName={"span"}
          />
        ),
        icon: Icon && (
          <GlowIcon className={iconClassName} Icon={Icon} type={"large"} />
        ),
      }}
      rightIcon={isCollapsible ? "chevronDownIcon" : "chevronRight"}
      iconClassName={clsx(
        isCollapsible && "duration-moderate1 ease-linear",
        isCollapsed && "rotate-180"
      )}
      {...props}
    />
  );
};
