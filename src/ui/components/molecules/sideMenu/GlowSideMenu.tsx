"use client";

import React, { ReactNode, useEffect, useMemo } from "react";
import clsx from "clsx";
import { Component, PropsWithClassName } from "../../../../common";

export enum MenuSide {
  Left = "left",
  Right = "right",
}

type GlowPopoverProps = PropsWithClassName & {
  isOpen: boolean;
  map: { default: ReactNode } & Record<string, ReactNode>;
  navigationStack: string[];
  onClickOutside?: () => void;
  side: MenuSide;
};

export const GlowSideMenu: Component<GlowPopoverProps> = ({
  className,
  map,
  onClickOutside,
  isOpen,
  side,
  navigationStack,
}) => {
  const containerRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [navigationStack]);

  const isLeftSide = useMemo(() => side === MenuSide.Left, [side]);
  return (
    <>
      <div
        role={"button"}
        aria-hidden={"true"}
        data-testid={"background"}
        className={clsx(
          isLeftSide ? "left-0" : "right-0",
          "fixed z-sideMenuBackground inset-0 overflow-hidden bg-background-overlay",
          isOpen ? "flex" : "hidden"
        )}
        onClick={onClickOutside}
      />
      <nav
        ref={containerRef}
        className={clsx(
          "fixed z-sideMenu inset-y-0",
          isLeftSide ? "left-0" : "right-0",
          "overflow-x-hidden",
          "duration-slow1 ease-sideMenu",
          isOpen
            ? "translate-x-0"
            : isLeftSide
            ? "-translate-x-full"
            : "translate-x-full",
          className
        )}
      >
        {map.default && (
          <div
            className={clsx(
              navigationStack.length !== 0
                ? "max-h-fullViewport overflow-hidden"
                : ""
            )}
          >
            {map.default}
          </div>
        )}
        {Object.keys(map).map((id) => {
          return id === "default" ? null : (
            <div
              id={`side-menu-${id}`}
              key={id}
              className={clsx(
                "absolute right-0",
                "min-h-fullViewport w-full",
                "bg-surface-neutral",
                "duration-slow1 ease-sideMenu",
                "overflow-x-hidden",
                navigationStack.includes(id)
                  ? "translate-x-0"
                  : isLeftSide
                  ? "translate-x-full size-0 overflow-hidden"
                  : "-translate-x-full"
              )}
            >
              {map[id]}
            </div>
          );
        })}
      </nav>
    </>
  );
};
