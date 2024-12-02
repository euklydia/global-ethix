import ChevronDownIconSvg from './chevronDown.svg';
import ChevronRightIconSvg from './chevronRight.svg';
import ArrowLeftIconSvg from './arrowLeft.svg';
import ForensicIconSvg from './forensic.svg';
import BurgerIconSvg from './burger.svg'
import FacebookIconSvg from './facebook.svg';
import TwitterIconSvg from './twitter.svg';
import LinkedinIconSvg from './linkedin.svg';
import MailIconSvg from './mail.svg';
import LogoGlobalEthixIconSvg from './logo.svg'
import { ObjectHelpers, FunctionHelpers } from '../../helpers';
import { PropsWithIcon } from '../../../common';

export enum IconName {
    ArrowLeft = 'ArrowLeft',
    Burger = 'Burger',
    ChevronDown = 'ChevronDown',
    ChevronRight = 'ChevronRight',
    Mail = 'Mail',
    Forensic= 'Forensic',
    Facebook= 'Faceook',
    Linekedin = 'Linkedin',
    Twitter='Twitter',
    Logo = "Logo"
}

export const Icons: Record<IconName, PropsWithIcon['Icon']> = {
    [IconName.ArrowLeft]: ArrowLeftIconSvg,
    [IconName.Burger]: BurgerIconSvg,
    [IconName.ChevronDown]: ChevronDownIconSvg,
    [IconName.ChevronRight]: ChevronRightIconSvg,
    [IconName.Mail]: MailIconSvg,
    [IconName.Forensic]: ForensicIconSvg,
    [IconName.Linekedin]: LinkedinIconSvg,
    [IconName.Facebook]: FacebookIconSvg,
    [IconName.Twitter]: TwitterIconSvg, 
    [IconName.Logo]: LogoGlobalEthixIconSvg
};

export const getIcon = (icon: string | undefined): PropsWithIcon['Icon'] => {
    if (icon === undefined || !ObjectHelpers.isEnumValue(icon, IconName)) {
        return FunctionHelpers.nullFn;
    }
    return Icons[icon] ?? FunctionHelpers.nullFn;
};