import styled, { css } from 'styled-components';

interface IconsProps {
    inset?: string;
}

export const Wrapper = styled.div<IconsProps>`
    ${({ inset }) =>
        inset
            ? css`
                  position: absolute;
                  inset: ${inset}; //top, right, bottom, left
              `
            : null}
`;
