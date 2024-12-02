"use client"; 
import {useLanguage} from '../../../libs'

export const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLocale: string) => {
    changeLanguage(newLocale); // Call the changeLanguage function from context
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange("fr")}
        disabled={locale === "fr"}
      >
        FR
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        disabled={locale === "en"}
      >
        EN
      </button>
    </div>
  );
};

