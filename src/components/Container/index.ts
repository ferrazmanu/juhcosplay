import styled from 'styled-components';

interface Props {
    gradient?: boolean;
    fullheight?: boolean;
    center?: boolean;
}

export const Container = styled.section<Props>`
    max-width: 80dvw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    ${(props) => props.center && 'justify-content:center'};
    gap: ${({ theme }) => theme.spacing._30};
    padding: 0 15px;
    height: ${(props) => props.fullheight && '100%'};
    min-height: ${(props) => props.fullheight && 'inherit'};
`;

export const FullContainer = styled.section<Props>`
    max-width: 100dvw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    inset: 0;

    img {
        position: absolute;
        height: inherit;
        width: inherit;
        inset: 0;
        object-fit: cover;
        z-index: 1;
    }

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 5;
        align-items: center;
        text-align: center;

        h1 {
            text-transform: uppercase;
            font-size: ${({ theme }) => theme.fontSizes.big_64};
        }

        p {
            font-size: ${({ theme }) => theme.fontSizes.medium_24};
        }
    }
`;
