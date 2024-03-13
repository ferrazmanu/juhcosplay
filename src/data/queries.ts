import { gql } from 'graphql-request';

export const eventsQuery = gql`
    query Events {
        events {
            eventName
            id
            tituloCosplay
            tags
            date
            slug
            image {
                url
                id
            }
        }
    }
`;
export const eventQuery = gql`
    query Event($slug: String) {
        event(where: { slug: $slug }) {
            eventName
            id
            tituloCosplay
            tags
            date
            slug
            image {
                url
                id
            }
        }
    }
`;

export const homePageQuery = gql`
    query HomePage {
        page(where: { pageName: "Juh Cosplay" }) {
            mainText {
                html
            }
            pageName
        }
    }
`;

export const aboutPageQuery = gql`
    query AboutPage {
        page(where: { pageName: "Sobre" }) {
            mainText {
                html
            }
            pageName
        }
    }
`;

export const socialsQuery = gql`
    query Socials {
        socials {
            name
            id
            url
        }
    }
`;
