"use client";

import React, { useCallback, useContext, useEffect } from "react";
import clsx from "clsx";
import { BURGER_MENU_ID, UIContext } from "../../../libs";
import { GlowClickable } from "../molecules";
import { GlowIcon } from "../atoms";
import { PropsWithAriaLabel, Component } from "../../../common";
import { useTailwindBreakpoint } from "../../../hooks";

type UIBurgerMenuButtonProps = PropsWithAriaLabel & {
  onOpenAsideNavbar: () => void;
};

export const UIBurgerMenuButton: Component<UIBurgerMenuButtonProps> = ({
  ariaLabel,
  onOpenAsideNavbar,
}) => {
  return (
    <GlowClickable
      className={clsx(
        "flex desktop:hidden",
        "justify-center items-center",
        "text-text-primary"
      )}
      ariaLabel={ariaLabel}
      onClick={onOpenAsideNavbar}
      content={{
        icon: <GlowIcon name={"burger"} width={"48px"} height={"48px"} />,
      }}
    />
  );
};
