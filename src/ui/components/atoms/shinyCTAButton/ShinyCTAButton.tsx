import { GlowClickable } from "../../molecules";
import { GlowTextBody } from "../typography";
import "./shinyCTA.css";

type ShinyCTAButtonProps = {
  link: string;
  label: string;
};

export const ShinyCTAButton = ({ link, label }: ShinyCTAButtonProps) => {
  return (
    <GlowClickable
      href={link}
      className="shiny-cta"
      content={{
        labelElement: (
          <GlowTextBody text={label} className="text-text-primary-inverse" />
        ),
      }}
    />
  );
};
