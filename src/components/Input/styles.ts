import styled, { css } from 'styled-components';

interface Props {
    disabled?: boolean;
}

export const Wrapper = styled.div<Props>`
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 4px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed;
            opacity: 0.5;
        `}

    button {
        display: flex;
        color: ${({ theme }) => theme.colors.white};
    }

    input {
        height: 38px;
    }
`;
