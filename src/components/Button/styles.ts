import styled from 'styled-components';

interface Props {
    maxWidth?: string;
}

export const Button = styled.button<Props>`
    background-color: ${({ theme }) => theme.colors.button};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    height: 45px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 3px 8px;
    width: 100%;
    margin: 0 auto;
    max-width: ${(props) => props.maxWidth};

    font-size: ${({ theme }) => theme.fontSizes.small_18};
    font-family: ${({ theme }) => theme.fonts.primary};
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
    }
`;
