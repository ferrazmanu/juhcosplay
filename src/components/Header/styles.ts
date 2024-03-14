import styled, { css } from 'styled-components';

interface Props {
    open?: boolean;
}

export const Header = styled.header<Props>`
    position: fixed;
    z-index: 10;
    background: ${({ theme }) => theme.colors.primary};

    button {
        display: none;

        &.close {
            color: ${({ theme }) => theme.colors.white};
        }

        &.open {
            color: ${({ theme }) => theme.colors.black};
        }

        svg {
            display: flex;
        }
    }

    @media only screen and (max-width: 800px) {
        position: relative;
        min-height: 40px;
        display: flex;
        justify-content: flex-end;
        padding: 5px 10px;
        align-items: center;
        background: ${({ theme }) => theme.colors.white};

        button {
            display: flex;
            align-self: flex-end;
            justify-content: flex-end;
        }
    }

    ul {
        display: flex;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing._30};
        padding: 45px 30px 40px;
        max-width: 80dvw;
        width: 100%;
        margin: 0 auto;
        transition: 0.3s ease-in-out;
        height: 100dvh;
        flex-direction: column;

        @media only screen and (max-width: 800px) {
            position: fixed;
            right: 0;
            top: 0;
            height: 100dvh;
            flex-direction: column;
            max-width: 30%;
            background: ${({ theme }) => theme.colors.primary};
            border-left: 3px solid ${({ theme }) => theme.colors.secondary};
            align-items: flex-end;
            text-align: right;
            gap: 10px;

            ${(props) =>
                props.open
                    ? css`
                          transform: translateX(100%);
                      `
                    : css`
                          transform: translateX(0%);
                      `}
        }

        @media only screen and (max-width: 600px) {
            max-width: 50%;
        }

        @media only screen and (max-width: 300px) {
            max-width: 70%;
            padding: 25px 20px;
        }

        li {
            text-transform: uppercase;
            font-size: ${({ theme }) => theme.fontSizes.small_18};
            font-family: ${({ theme }) => theme.fonts.primary};

            a {
                transform: perspective(1px) translateZ(0);
                box-shadow: 0 0 1px rgb(0 0 0 / 0%);
                position: relative;
                overflow: hidden;
                color: ${({ theme }) => theme.colors.white};

                &::before {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    left: 51%;
                    right: 51%;
                    bottom: -3px;
                    background: ${({ theme }) => theme.colors.secondary};
                    height: 2px;
                    -webkit-transition-property: left, right;
                    transition-property: left, right;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
                }

                &:hover::before {
                    left: 0;
                    right: 0;
                }
            }
        }
    }
`;
