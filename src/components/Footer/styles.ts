import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    min-height: 10px;
    padding: 4px;

    span,
    a {
        color: #898989;
    }

    span {
        font-size: ${({ theme }) => theme.fontSizes.small_12};
        display: flex;
        gap: 4px;
        margin-left: 140px;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 800px) {
            margin-left: 0;
        }
    }
`;
