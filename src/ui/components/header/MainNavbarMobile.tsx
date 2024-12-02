import { useState } from "react";
import {
  Menu,
  menuClasses,
  MenuItem,
  Sidebar,
  SubMenu,
} from "react-pro-sidebar";
import { UIBurgerMenuButton } from "../menu";
import { GlowIcon, GlowTextBody, GlowTitle } from "../atoms";
import { SocialMedia } from "../footer/socialMedia";
import React from "react";
import { navBarLink } from "@/data";
import { LangueSwitcher } from "./LangueSwitcher";
import { GlowClickable } from "../molecules";

export const MainNavbarMobile = ({ menus }: navBarLink) => {
  const [toggled, setToggled] = useState(false);
  const [open, setOpen] = React.useState("");

  const handleOpenSubMenu = (key: string) => {
    if (open === key) {
      setOpen("");
    } else {
      setOpen(key);
    }
  };

  const onOpenCloseAside = () => {
    setToggled(!toggled);
  };

  return (
    <div className="block desktopS:hidden">
      <Sidebar
        onBackdropClick={onOpenCloseAside}
        toggled={toggled}
        breakPoint="always"
        transitionDuration={300}
        className="z-10000000 text-text-primary-inverse w-full flex bg-background-l0"
        width="280px"
        backgroundColor="#ffffff"
      >
        <div className="flex w-full justify-between p-1">
          <LangueSwitcher />
          <GlowClickable
            onClick={onOpenCloseAside}
            ariaLabel="close aside mobile navbar"
            content={{
              icon: (
                <GlowIcon
                  name="cross"
                  className="text-text-primary fill-text-primary rounded-0.25"
                  width={32}
                  height={32}
                />
              ),
            }}
          />
        </div>
        <GlowIcon
          name={"logo"}
          width={"196px"}
          height={"50px"}
          className="mx-auto my-1"
        />
        <Menu
          className="w-[280px] h-[65vh]"
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0) {
                return {
                  color: "#131b30",
                  backgroundColor: active ? "#f9fafb" : "#fffff",
                  height: "auto",
                  padding: "0.5rem",
                };
              } else {
                return {
                  color: "#131b30",
                  backgroundColor: active ? "#f9fafb" : "#ffffff",
                  height: "auto",
                  padding: "0.5rem 0.5rem 0.5rem 1.25rem",
                };
              }
            },
            icon: ({ level, active }) => {
              if (level === 0) {
                return {
                  color: active ? "#344cff" : "#131b30",
                  fill: active ? "#344cff" : "#131b30",
                  backgroundColor: active ? "#ffffff" : "#f9fafb",
                };
              } else {
                return {
                  color: active ? "#344cff" : "#131b30",
                  fill: active ? "#344cff" : "#131b30",
                  backgroundColor: active ? "#ffffff" : "#f9fafb",
                };
              }
            },
          }}
          rootStyles={{
            ["." + menuClasses.button]: {
              "&:hover": {
                color: "#131b30",
                backgroundColor: "#f9fafb",
              },
            },
            [`.${menuClasses.button}:hover .${menuClasses.icon}`]: {
              color: "#344cff",
              fill: "#344cff",
              backgroundColor: "#ffffff",
              borderRadius: "0.25rem",
            },
          }}
        >
          {menus.map((menu) =>
            menu.subMenus ? (
              <SubMenu
                key={menu.title}
                icon={menu.icon && <GlowIcon name={menu.icon} />}
                label={
                  <div>
                    <GlowTitle text={menu.title} fontSize={"title4"} />
                  </div>
                }
                onClick={() => handleOpenSubMenu(menu.title)}
                active={open === menu.title}
                open={open === menu.title}
              >
                {menu.subMenus.map((subMenu) => {
                  return (
                    <MenuItem key={subMenu.title}>{subMenu.title}</MenuItem>
                  );
                })}
              </SubMenu>
            ) : (
              <MenuItem key={menu.title}>
                <GlowTitle text={menu.title} fontSize={"title4"} />
              </MenuItem>
            )
          )}
        </Menu>
        <div className="pb-1">
          <SocialMedia />
        </div>
      </Sidebar>

      <UIBurgerMenuButton onOpenAsideNavbar={onOpenCloseAside} />
    </div>
  );
};
