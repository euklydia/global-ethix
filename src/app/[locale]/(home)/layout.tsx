import { PropsWithChildren } from "react";
import withLayout from "../withLayout";

type HomeLayoutProps = PropsWithChildren;

export default function HomeLayout({ children }: Readonly<HomeLayoutProps>) {
  return withLayout({ LayoutChildren: children });
}
