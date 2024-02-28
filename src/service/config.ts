import { GraphQLClient } from 'graphql-request';

const { REACT_APP_PUBLIC_ENDPOINT, REACT_APP_PUBLIC_TOKEN } = process.env;

if (!REACT_APP_PUBLIC_ENDPOINT) {
    throw new Error('REACT_APP_PUBLIC_ENDPOINT is not defined');
}

const client = new GraphQLClient(REACT_APP_PUBLIC_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${REACT_APP_PUBLIC_TOKEN}`,
    },
});

export default client;
