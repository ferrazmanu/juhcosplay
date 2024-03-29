import { FC } from 'react';
import { Wrapper } from './styles';
import { useTheme } from 'styled-components';

interface Props {
    color?: string;
    size?: string;
    fullPage?: boolean;
}

const Loading: FC<Props> = ({ color = '#fff', size = '54px', fullPage }) => {
    const theme = useTheme();

    return (
        <Wrapper fullPage={fullPage}>
            <svg
                version="1.0"
                width={size}
                height={size}
                viewBox="0 0 128 128"
                xmlSpace="preserve"
            >
                <circle
                    cx="64.13"
                    cy="64.13"
                    r="27.63"
                    fill={theme.colors.black || color}
                />
                <path
                    d="M64.13 18.5A45.63 45.63 0 1 1 18.5 64.13 45.63 45.63 0 0 1 64.13 18.5zm0 7.85a37.78 37.78 0 1 1-37.78 37.78 37.78 37.78 0 0 1 37.78-37.78z"
                    fillRule="evenodd"
                    fill={theme.colors.black || color}
                />
                <g>
                    <path
                        d="M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                        fill={theme.colors.black || color}
                    />
                    <path
                        d="M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                        fill={theme.colors.black || color}
                        transform="rotate(120 64 64)"
                    />
                    <path
                        d="M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                        fill={theme.colors.black || color}
                        transform="rotate(240 64 64)"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 64 64"
                        to="120 64 64"
                        dur="1080ms"
                        repeatCount="indefinite"
                    ></animateTransform>
                </g>
            </svg>
        </Wrapper>
    );
};

export default Loading;
