import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
    fontSizes: {
        big_80: 'clamp(2.37rem, 80px, 5rem)',
        big_64: 'clamp(1.875rem, 64px, 4rem)',
        big_60: 'clamp(1.75rem, 60px, 3.75rem)',
        big_48: 'clamp(1.375rem, 48px, 3rem)',
        big_42: 'clamp(1.375rem, 42px, 2.62rem)',
        medium_36: 'clamp(1.313rem, 36px, 2.25rem)',
        medium_32: 'clamp(1.25rem, 32px, 2rem)',
        medium_30: 'clamp(1.375rem, 30px, 1.875rem)',
        medium_24: 'clamp(1.063rem, 24px, 1.5rem)',
        small_18: 'clamp(0.813rem, 18px, 1.125rem)',
        small_14: 'clamp(0.75rem, 14px, 0.875rem)',
        small_12: 'clamp(0.625rem, 12px, 0.75rem)',
    },
    spacing: {
        _30: 'clamp(1.375rem, 1.56vw, 1.875rem)',
        _60: 'clamp(1.875rem, 3.13vw, 3.75rem)',
    },
    fonts: {
        primary: 'Cabin',
        secondary: 'Raleway',
    },
    colors: {
        white: '#ebebeb',
        black: '#0a0a0a',
        primary: '#371f53',
        secondary: '#624f8f',
        button: 'transparent',
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Theme = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
