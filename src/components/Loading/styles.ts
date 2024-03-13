import styled, { css } from 'styled-components';

interface Props {
    fullPage?: boolean;
}

export const Wrapper = styled.div<Props>`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;

    ${({ fullPage }) =>
        fullPage &&
        css`
            min-height: inherit;
        `}
`;
