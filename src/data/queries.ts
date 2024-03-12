import { gql } from 'graphql-request';

export const eventsQuery = gql`
    query Events {
        events {
            name
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
            name
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
        page(where: { pageName: "JuhCosplay" }) {
            mainText
            pageName
        }
    }
`;

export const aboutPageQuery = gql`
    query AboutPage {
        page(where: { pageName: "Sobre" }) {
            mainText
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
