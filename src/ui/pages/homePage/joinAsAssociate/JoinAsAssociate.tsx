import React from "react";
import "./style.css";
import { GlowTextBodySmall, GlowTitle } from "@/ui/components";

const description =
  "Chaque bureau-pays est une entreprise indépendante. Elle offre, sur son territoire, les services de GlobalEthix, en tout ou en partie, en respect des standards établis et du Code d’éthique de l’organisation. Le bureau-pays désigne un associé pour le représenter au sein du comité directeur de GEI. Les experts-conseil des bureaux-pays participent au pool d’experts internationaux proposés à l’échelle globale.";

export const JoinAsAssociate = () => {
  return (
    <section className="home bg-background-brand px-1 py-2 desktopS:px-3 desktopS:py-4 gap-1.25 desktopS:gap-1.5 flex flex-col desktopS:flex-row items-center">
      <div className="description flex gap-0.5 flex-col">
        <GlowTitle
          className="gradient-text"
          text={"Participez au mouvement !"}
          fontSize={"title2"}
          color={"primary-inverse-fixed"}
          TagName="h4"
        />
        <GlowTitle
          text={"Devenez associé"}
          fontSize={"title3"}
          color={"tertiary-inverse-fixed"}
        />

        <GlowTextBodySmall
          text={description}
          color={"primary-inverse-fixed"}
          className="text-justify"
        />
        <form id="form" autoComplete="off" className="pt-0 desktopS:pt-1 flex">
          <input
            type="email"
            id="email-id"
            name="email_address"
            aria-label="email adress"
            className="w-full desktopS:w-auto"
            placeholder=""
            required
            // onInput="checkEmpty()"
          />
          <button type="submit" className="btn" aria-label="submit">
            <span>Subscribe</span>
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </button>
        </form>
      </div>

      <div className="users-color-container gap-0.25 desktopS:gap-0.5 -order-1 desktopS:order-1">
        <span className="item"></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/274f29ce-0d3f-4ac2-a2aa-f9b7bd188b2a"
          alt=""
        />
        <span className="item"></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9"
          alt=""
        />

        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/03e51e1e-9750-45a5-b75e-a1e341d4562a"
          alt=""
        />
        <span className="item"></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5eb50f89-3e5a-480e-860c-8d40d3ba9ffe"
          alt=""
        />
        <span className="item"></span>

        <span className="item"></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"
          alt=""
        />
        <span className="item"></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/97ef9643-5202-41aa-80f0-ceeabccdd099"
          alt=""
        />
      </div>
    </section>
  );
};
