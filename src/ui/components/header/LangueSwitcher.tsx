import React from "react";
import { GlowClickable } from "../molecules";
import { useLanguage } from "../../../libs";
import { GlowIcon } from "../atoms";

export const LangueSwitcher = () => {
  const { locale, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLocale: string) => {
    changeLanguage(newLocale); // Call the changeLanguage function from context
  };
  return (
    <div className="flex gap-1">
      <GlowClickable
        onClick={() => handleLanguageChange("fr")}
        ariaLabel="hi"
        className="w-[32px] aspect-1/1 h-[32px] overflow-hidden rounded-0.25"
        content={{
          icon: (
            <GlowIcon
              name="fr"
              width={32}
              height={32}
              className="rounded-0.25 w-[32px] overflow-hidden aspect-1/1 h-[32px]"
            />
          ),
        }}
      />
      <GlowClickable
        onClick={() => handleLanguageChange("en")}
        className="rounded-0.25 w-[32px] overflow-hidden aspect-1/1 h-[32px]"
        content={{
          icon: (
            <GlowIcon
              name="us"
              className="rounded-0.25 w-[32px] overflow-hidden aspect-1/1 h-[32px]"
            />
          ),
        }}
      />
    </div>
  );
};
