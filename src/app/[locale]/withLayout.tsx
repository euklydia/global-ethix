import React, { ReactNode } from "react";
import { DataProvider } from "../../libs";
import { GlowDivider, JoinAsAssociate, LanguageSwitcher, UIFooterShell } from "../../ui";
import { Footer, Header } from "../../ui";

type withLayoutProps = {
  LayoutChildren: ReactNode;
};

const withLayout = ({ LayoutChildren }: withLayoutProps) => {
  return (
    <DataProvider>
      <Header />
      <main className="max-w-[1140px] m-auto">{LayoutChildren}</main>
      <JoinAsAssociate />
      <GlowDivider />
      <Footer />
    </DataProvider>
  );
};

export default withLayout;
