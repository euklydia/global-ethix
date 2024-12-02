import React, { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
import { PropsWithClassName, Component } from "../../../common";

type UIFooterShellProps = PropsWithClassName & PropsWithChildren;

export const UIFooterShell: Component<UIFooterShellProps> = ({
  className,
  children,
}) => {
  return (
    <footer
      className={clsx(
        "flex flex-col",
        "inset-x-0 bottom-0",
        "w-full relative",
        className
      )}
    >
      {children}
    </footer>
  );
};
