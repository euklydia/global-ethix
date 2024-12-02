import { PropsWithDataLayer } from "../../../../common";

export type Accordion = PropsWithDataLayer & {
    id: string;
    label: string;
    labelColor?: string;
    href: string;
    dataLayerClassName?: string;
};
