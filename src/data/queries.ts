import { gql } from 'graphql-request';

export const eventQuery = gql`
    query Events {
        events {
            name
            id
            tituloCosplay
            tags
            date
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
