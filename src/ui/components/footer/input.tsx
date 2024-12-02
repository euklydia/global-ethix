import React from "react";
import { GlowIcon } from "../atoms";

export const Input = () => {
  return (
    <form>
      <div className="flex items-center w-full ">
        <input
          type="text"
          id="simple-search"
          className="h-[3rem] block w-full pl-0.5 rounded-tl-0.5 rounded-bl-0.5"
          placeholder="email@email.com..."
          required
        />
        <div className="rounded-tr-0.5 w-[5rem] h-[3rem] flex items-center justify-center rounded-br-0.5 bg-gradient-to-tr from-[#00b5f5] to-[#002a8f] ">
          <GlowIcon
            className="rounded-tl-0.5 rounded-bl-0.5 w-[32px] h-[32px]"
            name={"mail"}
          />
        </div>
      </div>
    </form>
  );
};
