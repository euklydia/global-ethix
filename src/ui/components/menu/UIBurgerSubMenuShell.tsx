"use client";

import React, { PropsWithChildren, useCallback, useContext } from "react";
import { BURGER_MENU_ID, UIContext } from "../../../libs";
import { GlowClickable, GlowMenuButton } from "../molecules";
import { Component } from "../../../common";
import { GlowIcon, GlowTitle } from "../atoms";

type UIBurgerSubMenuShellProps = PropsWithChildren & {
  title: string;
  goBackAriaLabel: string;
};

export const UIBurgerSubMenuShell: Component<UIBurgerSubMenuShellProps> = ({
  title,
  children,
  goBackAriaLabel,
}) => {
  const {
    menu: { goBack },
  } = useContext(UIContext);

  const handleGoBack = useCallback(() => {
    goBack(BURGER_MENU_ID);
  }, [goBack]);

  return (
    <div>
      <div className={"flex flex-row items-center justify-between p-1"}>
        <GlowClickable
          ariaLabel={goBackAriaLabel}
          onClick={handleGoBack}
          className={"text-text-primary"}
          content={{
            icon: (
              <GlowIcon width={"48px"} height={"48px"} name={"arrowLeft"} />
            ),
          }}
        />
        <GlowTitle text={title} fontSize={"title4"} />
        <GlowClickable
          ariaLabel={goBackAriaLabel}
          onClick={handleGoBack}
          className={"text-text-primary"}
          content={{
            icon: <GlowIcon width={"48px"} height={"48px"} name={"cross"} />,
          }}
        />
      </div>
      <div className={"flex flex-col gap-0.25"}>{children}</div>
    </div>
  );
};
