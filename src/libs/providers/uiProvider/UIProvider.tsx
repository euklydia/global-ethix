"use client";

import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Component } from "../../../common";
import {
  Modal,
  ModalList,
  SideMenu,
  SideMenuList,
  UIContext,
  UIContextValueType,
} from "./UIContext";

export type UIProviderProps = PropsWithChildren;

export const UIProvider: Component<UIProviderProps> = ({ children }) => {
  const [menus, setMenus] = useState<SideMenuList>({});
  const [modals, setModals] = useState<ModalList>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** Menu **/
  const openMenu = useCallback(
    (id: string, content?: ReactNode) => {
      setMenus({
        ...menus,
        [id]: {
          ...menus[id],
          isOpen: true,
          map: {
            ...menus[id]?.map,
            default: content ?? menus[id]?.map.default,
          },
        },
      });
      setIsMenuOpen(true);
    },
    [menus]
  );

  const addMenu = useCallback(
    (id: string, menu: SideMenu) => {
      setMenus({ ...menus, [id]: { ...menu, isOpen: false } });
    },
    [menus]
  );

  const addAndOpenMenu = useCallback(
    (id: string, menu: SideMenu) => {
      setMenus({ ...menus, [id]: { ...menu, isOpen: false } });
      requestAnimationFrame(() => {
        setMenus({ ...menus, [id]: { ...menu, isOpen: true } });
      });
      setIsMenuOpen(true);
    },
    [menus]
  );

  const closeMenu = useCallback(
    (id: string, remove = false) => {
      if (menus[id]) {
        if (remove) {
          delete menus[id];
          setMenus(menus);
        } else {
          setMenus({
            ...menus,
            [id]: { ...menus[id], isOpen: false, navigationStack: [] },
          });
        }
        setIsMenuOpen(
          Object.keys(menus).some((menuId) =>
            menuId === id ? false : menus[menuId].isOpen
          )
        );
      }
    },
    [menus]
  );

  const navigateMenu = useCallback(
    (id: string, contentId: string, content?: ReactNode) => {
      if (menus[id]) {
        setMenus({
          ...menus,
          [id]: {
            ...menus[id],
            navigationStack: [...menus[id].navigationStack, contentId],
            map: {
              ...menus[id].map,
              [contentId]: content ?? menus[id].map[contentId],
            },
          },
        });
      }
    },
    [menus]
  );

  const goBackMenu = useCallback(
    (id: string) => {
      if (menus[id]) {
        setMenus({
          ...menus,
          [id]: {
            ...menus[id],
            navigationStack: menus[id].navigationStack.slice(0, -1),
          },
        });
      }
    },
    [menus]
  );

  /** Modal **/
  const openModal = useCallback(
    (id: string, variantId?: string) => {
      if (modals[id]) {
        setModals({
          ...modals,
          [id]: { ...modals[id], variantId, isOpen: true },
        });
        setIsModalOpen(true);
      }
    },
    [modals]
  );

  const addAndOpenModal = useCallback(
    (id: string, modal: Modal) => {
      setModals({ ...modals, [id]: { ...modal, isOpen: true } });
      setIsModalOpen(true);
    },
    [modals]
  );

  const addIfAbsentAndOpenModal = useCallback(
    (id: string, modal: () => Modal, override = true) => {
      if (override) {
        setModals({ ...modals, [id]: { ...modal(), isOpen: true } });
      } else {
        setModals({ ...modals, [id]: { ...modals[id], isOpen: true } });
      }
      setIsModalOpen(true);
    },
    [modals]
  );

  const closeAndOpenModal = useCallback(
    (id: string, newId: string, variantId?: string) => {
      if (modals[id] && modals[newId]) {
        setModals({
          ...modals,
          [id]: { ...modals[id], isOpen: false },
          [newId]: { ...modals[newId], variantId, isOpen: true },
        });
        setIsModalOpen(true);
      }
    },
    [modals]
  );

  const closeModal = useCallback(
    (id: string, remove = false) => {
      if (modals[id]) {
        if (remove) {
          delete modals[id];
          setModals(modals);
        } else {
          setModals({ ...modals, [id]: { ...modals[id], isOpen: false } });
        }
        setIsMenuOpen(
          Object.keys(modals).some((modalId) =>
            modalId === id ? false : modals[modalId].isOpen
          )
        );
      }
    },
    [modals]
  );

  const providerValue: UIContextValueType = useMemo(() => {
    return {
      menu: {
        open: openMenu,
        add: addMenu,
        addAndOpen: addAndOpenMenu,
        close: closeMenu,
        navigate: navigateMenu,
        goBack: goBackMenu,
        hydrate: setMenus,
        sideMenuList: menus,
        isOpen: isMenuOpen,
      },
      modal: {
        open: openModal,
        addAndOpen: addAndOpenModal,
        addIfAbsentAndOpen: addIfAbsentAndOpenModal,
        closeAndOpen: closeAndOpenModal,
        close: closeModal,
        hydrate: setModals,
        modals,
        isOpen: isModalOpen,
      },
    };
  }, [
    openMenu,
    addMenu,
    addAndOpenMenu,
    closeMenu,
    navigateMenu,
    goBackMenu,
    menus,
    isMenuOpen,
    openModal,
    addAndOpenModal,
    addIfAbsentAndOpenModal,
    closeAndOpenModal,
    closeModal,
    modals,
    isModalOpen,
  ]);

  return (
    <UIContext.Provider value={providerValue}>{children}</UIContext.Provider>
  );
};
