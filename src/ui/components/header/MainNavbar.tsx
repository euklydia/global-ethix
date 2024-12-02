import React from "react";
import { GlowClickable } from "../molecules";
import { GlowTextBody } from "../atoms";
import { AccordionLink } from "./AccordionLink";
import clsx from "clsx";
import { navBarLink } from "../../../data";

export const MainNavbar = ({ menus }: navBarLink) => {
  return (
    <div className="nav-links hidden desktopS:block">
      <ul className="flex gap-0.5 justify-center items-center">
        {menus.map((menu) => {
          return (
            <li key={menu.id} className="nav-link relative z-[11]">
              <GlowClickable
                href={menu.link}
                content={{
                  labelElement: (
                    <GlowTextBody
                      text={menu.title}
                      TagName="span"
                      className="p-0.5"
                    />
                  ),
                }}
              />
              {menu.subMenus && (
                <div
                  className={clsx(
                    "dropdown transform translate-y-[10px] pointer-events-none",
                    "absolute left-0 w-[25rem] opacity-0 duration-moderate1"
                  )}
                >
                  <ul className="relative rounded-0.25 bg-background-l0 box-shadow">
                    {menu.subMenus.map((submenu) => {
                      return (
                        <li key={submenu.id} className="dropdown-link relative">
                          <GlowClickable
                            href={submenu.link}
                            content={{
                              labelElement: (
                                <AccordionLink
                                  Icon={submenu.icon}
                                  title={submenu.title}
                                  subtitle={submenu.subtitle}
                                />
                              ),
                            }}
                            className="flex group items-start duration-moderate1 p-1 rounded-0.25"
                          />
                          {submenu.subMenus && (
                            <div
                              className={clsx(
                                "dropdown second transform translate-x-[10px] pointer-events-none",
                                "absolute left-[101%] w-[70%] opacity-0 duration-moderate1 top-0"
                              )}
                            >
                              <ul
                                className={clsx(
                                  "relative bg-background-l0 rounded-0.25 box-shadow outline outline-medium outline-border-primary"
                                )}
                              >
                                {submenu.subMenus.map((submenu) => {
                                  return (
                                    <li
                                      key={submenu.id}
                                      className="dropdown-link relative"
                                    >
                                      <GlowClickable
                                        href={submenu.link}
                                        content={{
                                          labelElement: (
                                            <GlowTextBody
                                              text={submenu.title}
                                              TagName="span"
                                            />
                                          ),
                                        }}
                                        className="flex items-start p-1 rounded-0.25"
                                      />
                                      {submenu.subMenus && (
                                        <div className="dropdown second transform translate-x-[10px] pointer-events-none absolute top-0 left-[106%] w-[10rem] opacity-0 duration-moderate1">
                                          <ul className="relative rounded-0.5 bg-background-l0 box-shadow outline outline-medium outline-border-primary">
                                            {submenu.subMenus.map((submenu) => {
                                              return (
                                                <li
                                                  key={submenu.id}
                                                  className="dropdown-link relative"
                                                >
                                                  <GlowClickable
                                                    href={submenu.link}
                                                    content={{
                                                      labelElement: (
                                                        <GlowTextBody
                                                          text={submenu.title}
                                                          TagName="span"
                                                        />
                                                      ),
                                                    }}
                                                    className="flex items-start p-1 rounded-0.25"
                                                  />
                                                </li>
                                              );
                                            })}
                                            <div className="arrow transform rotate-45 absolute w-[11px] h-[11px] top-[10px] -left-[5.5px]  cursor-pointer duration-moderate1 z-[-1] bg-background-l0"></div>
                                          </ul>
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                                <div
                                  className={clsx(
                                    "arrow transform rotate-45 absolute w-[11px] h-[11px] top-[10px] -left-[5.5px]",
                                    "cursor-pointer duration-moderate1 z-[-1] bg-background-l0"
                                  )}
                                ></div>
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                    <div
                      className={clsx(
                        "arrow transform rotate-45 absolute w-[11px] h-[11px] -top-[5.5px]",
                        "left-[32px] cursor-pointer duration-moderate1 z-[-1] bg-background-l0"
                      )}
                    ></div>
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
