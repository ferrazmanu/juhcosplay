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
    description: string;
    image: [
        {
            url: string;
            id: string;
        },
    ];
}

export interface LinksProps {
    id: string;
    path: string;
    title: string;
}
