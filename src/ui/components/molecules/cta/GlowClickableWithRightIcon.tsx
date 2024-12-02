import React from "react";
import clsx from "clsx";
import {
  Component,
  PropsWithAriaLabel,
  PropsWithClassName,
  PropsWithCTA,
  PropsWithId,
  PropsWithCTAContent,
  PropsWithSuppressHydrationWarning,
} from "../../../../common";
import { GlowCTA } from "./GlowCTA";
import { GlowCTAContent } from "./GlowCTAContent";
import { RightIconShell } from "./RightIconShell";

type GlowClickableWithRightIconProps = PropsWithAriaLabel &
  PropsWithClassName &
  PropsWithId &
  PropsWithSuppressHydrationWarning &
  PropsWithCTA & {
    content: PropsWithCTAContent;
    rightIcon: string;
    iconClassName?: string;
  };

/**
 * Clickable component used to make call-to-actions
 * Use this component when you need a CTA with an icon and/or text and a right icon
 * @param ariaLabel - Aria label for the button or anchor
 * @param className - Additional styles
 * @param id - ID of the button or the anchor
 * @param suppressHydrationWarning - If true, suppress the hydration warning
 * @param content - Content of the clickable text (icon, label, ...)
 * @param rightIcon - Icon to be displayed on the right side of the text
 * @param iconClassName - Additional styles for the icon
 * @param props - Action to be performed when the text is clicked (href, onClick, ...)
 */
export const GlowClickableWithRightIcon: Component<
  GlowClickableWithRightIconProps
> = ({
  ariaLabel,
  className,
  id,
  suppressHydrationWarning = false,
  content,
  rightIcon,
  iconClassName,
  ...props
}) => {
  return (
    <GlowCTA
      ariaLabel={ariaLabel}
      className={clsx("flex flex-row items-center justify-between", className)}
      id={id}
      suppressHydrationWarning={suppressHydrationWarning}
      {...props}
    >
      <RightIconShell Icon={rightIcon} iconClassName={iconClassName}>
        <GlowCTAContent {...content} />
      </RightIconShell>
    </GlowCTA>
  );
};
