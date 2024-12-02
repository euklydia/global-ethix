import React from "react";
import "./social.css";
import clsx from "clsx";
import { GlowIcon } from "../atoms";

export const SocialMedia = () => {
  return (
    <ul className="social-icons flex items-center justify-center gap-0.5">
      <li
        className={clsx(
          "footer-social-media group w-[40px] h-[40px] rounded-0.25 bg-gradient-to-tr",
          "flex items-center justify-center",
          "hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] cursor-pointer"
        )}
      >
        <a href="#">
          <GlowIcon
            name={"facebook"}
            width={24}
            height={24}
            className="transition duration-moderate1 ease-out"
          />
        </a>
      </li>
      <li
        className={clsx(
          "footer-social-media group w-[40px] h-[40px] rounded-0.25 bg-gradient-to-tr",
          "flex items-center justify-center",
          "hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] cursor-pointer"
        )}
      >
        <a href="#">
          <GlowIcon
            name={"twitter"}
            width={24}
            height={24}
            className="transition duration-moderate1 ease-out"
          />
        </a>
      </li>
      <li
        className={clsx(
          "footer-social-media group w-[40px] h-[40px] rounded-0.25 bg-gradient-to-tr",
          "flex items-center justify-center",
          "hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] cursor-pointer"
        )}
      >
        <a href="#">
          <GlowIcon
            name={"linkedin"}
            width={24}
            height={24}
            className="transition duration-moderate1 ease-out"
          />
        </a>
      </li>
    </ul>
  );
};
