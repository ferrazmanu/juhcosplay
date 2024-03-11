export interface OptionProps {
    id: number;
    value: string;
    title?: string;
    name?: string;
    fullName?: string;
    selected?: boolean;
    parameter?: string;
    default?: boolean;
    originalIssue?: {
        name: string;
    };
}

export interface EventsProps {
    events: EventProps[];
}

export interface EventProps {
    name: string;
    id: string;
    tituloCosplay: string;
    date: string;
    tags: string[];
    image: ImageProps[];
    srcSet?: string[];
}

export interface PageProps {
    page: {
        mainText?: string;
        pageName?: string;
    };
}

export interface ImageProps {
    url: string;
    id: string;
}

export interface LinksProps {
    id: string;
    path: string;
    title: string;
}

export interface SocialsProps {
    socials: SocialProps[];
}

export interface SocialProps {
    name: string;
    id: string;
    url: string;
}

export type Inputs = {
    name: string;
    message: string;
};
