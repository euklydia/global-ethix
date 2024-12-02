'use client';

import { createContext, ReactNode } from 'react';
import { MenuSide } from '../../../ui';
import { FunctionHelpers } from '../../../libs';

export type SideMenuMap = { default: ReactNode } & Record<string, ReactNode>;

export const SideMenu = (side: MenuSide, map: SideMenuMap, className?: string, isOpen = false): SideMenu => ({
    side,
    map,
    isOpen,
    className,
    navigationStack: [],
});
export type SideMenu = {
    side: MenuSide;
    isOpen: boolean;
    map: SideMenuMap;
    className?: string;
    navigationStack: string[];
};

export type SideMenuList = Record<string, SideMenu>;

type UIMenuContextType = {
    /**
     * Open a menu
     * @param id the id of the menu
     * @param content sets the default content of the menu (optional if the content is already set)
     */
    open: (id: string, content?: ReactNode) => void;
    /**
     * Add a menu
     * @param id the id of the menu
     * @param menu the menu to add
     */
    add: (id: string, menu: SideMenu) => void;
    /**
     * Add a menu and open it
     * @param id the id of the menu
     * @param menu the menu to add
     */
    addAndOpen: (id: string, menu: SideMenu) => void;
    /**
     * Close a menu
     * @param id the id of the menu
     * @param remove if true, remove the modal from the list
     */
    close: (id: string, remove?: boolean) => void;
    /**
     * Navigate to a menu
     * @param menuId the id of the menu
     * @param contentId the id of the content
     * @param content sets the content of the contentId (optional if the content is already set)
     */
    navigate: (menuId: string, contentId: string, content?: ReactNode) => void;
    /**
     * Go back to the previous menu
     * @param id the id of the menu
     */
    goBack: (id: string) => void;
    /**
     * Hydrate the menu list
     * @param menus the list of menus
     */
    hydrate: (menus: SideMenuList) => void;
    sideMenuList: SideMenuList;
    isOpen: boolean;
};

export const Modal = (content: ReactNode, variantId?: string, shouldAnimate?: boolean): Modal => ({
    content,
    isOpen: false,
    variantId,
    shouldAnimate,
});
export type Modal = { content: ReactNode; isOpen: boolean; variantId?: string; shouldAnimate?: boolean };

export type ModalList = Record<string, Modal>;

export type UIModalContextType = {
    /**
     * Open a modal
     * @param id the id of the modal
     * @param variantId the id of the variant (optional)
     */
    open: (id: string, variantId?: string) => void;
    /**
     * Add a modal and open it
     * @param id the id of the modal
     * @param modal the modal to add
     */
    addAndOpen: (id: string, modal: Modal) => void;
    /**
     * Add a modal if it doesn't exist and open it
     * @param id the id of the modal
     * @param modal the modal to add
     * @param override if true, override the modal if it exists
     */
    addIfAbsentAndOpen: (id: string, modal: () => Modal, override?: boolean) => void;
    /**
     * Close a modal and open another
     * @param id the id of the modal to close
     * @param newId the id of the modal to open
     * @param variantId the id of the variant (optional)
     */
    closeAndOpen: (id: string, newId: string, variantId?: string) => void;
    /**
     * Close a modal
     * @param id the id of the modal
     * @param remove if true, remove the modal from the list
     */
    close: (id: string, remove?: boolean) => void;
    /**
     * Hydrate the modal list
     * @param modals the list of modals
     */
    hydrate: (modals: ModalList) => void;
    modals: ModalList;
    isOpen: boolean;
};

export type UIContextValueType = {
    menu: UIMenuContextType;
    modal: UIModalContextType;
};

const UIContextInitialState: UIContextValueType = {
    menu: {
        open: FunctionHelpers.emptyFn,
        add: FunctionHelpers.emptyFn,
        addAndOpen: FunctionHelpers.emptyFn,
        close: FunctionHelpers.emptyFn,
        navigate: FunctionHelpers.emptyFn,
        goBack: FunctionHelpers.emptyFn,
        hydrate: FunctionHelpers.emptyFn,
        sideMenuList: {},
        isOpen: false,
    },
    modal: {
        open: FunctionHelpers.emptyFn,
        addAndOpen: FunctionHelpers.emptyFn,
        addIfAbsentAndOpen: FunctionHelpers.emptyFn,
        closeAndOpen: FunctionHelpers.emptyFn,
        close: FunctionHelpers.emptyFn,
        hydrate: FunctionHelpers.emptyFn,
        modals: {},
        isOpen: false,
    },
};

export const UIContext = createContext<UIContextValueType>(UIContextInitialState);
