"use client";

import React, { useCallback, useContext, useEffect } from "react";
import clsx from "clsx";
import { BURGER_MENU_ID, UIContext } from "../../../libs";
import { GlowMenuButton } from "../molecules";
import { Component, PropsWithClassName } from "../../../common";

type UIBurgerMenuItemProps = {
  label: string;
  id?: string;
  href: string;
  color?: string;
  hasSubCategories?: boolean;
  dataLayerId?: string;
} & PropsWithClassName;

export const UIBurgerMenuItem: Component<UIBurgerMenuItemProps> = ({
  label,
  id,
  href,
  color,
  hasSubCategories,
  dataLayerId,
  className,
}) => {
  const {
    menu: { navigate },
  } = useContext(UIContext);

  const onClick = useCallback(() => {
    if (id) {
      navigate(BURGER_MENU_ID, id);
    }
  }, [id, navigate]);

  const ctaProps = hasSubCategories ? { onClick } : { href };

  return (
    <GlowMenuButton
      className={clsx(
        "bg-background-l2 px-1 text-text-primary fill-text-primary",
        className
      )}
      label={label}
      showArrow={hasSubCategories}
      labelColor={color}
      dataLayerId={dataLayerId}
      {...ctaProps}
    />
  );
};
