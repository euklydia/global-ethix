import React, { ReactNode } from "react";
import { GlowIcon, GlowTextBody, GlowTextBodySmall } from "../atoms";

type SubNavLinkProps = {
  Icon?: string;
  title: string;
  subtitle?: string;
};

export const AccordionLink = ({ Icon, title, subtitle }: SubNavLinkProps) => {
  return (
    <div className="gap-1 flex items-center justify-center rounded-1 hover:bg-[#f9fafb]">
      {Icon && (
        <div className="p-0.5 rounded-0.5 bg-[#f9fafb] group-hover:bg-background-l0">
          <GlowIcon
            name={Icon}
            width={"24px"}
            height={"24px"}
            className="fill-text-disabled group-hover:fill-text-brand rounded-0.25"
          />
        </div>
      )}
      <div>
        <GlowTextBody text={title} fontWeight={"bold"} />
        {subtitle && <GlowTextBodySmall text={subtitle} color={"tertiary"} />}
      </div>
    </div>
  );
};
