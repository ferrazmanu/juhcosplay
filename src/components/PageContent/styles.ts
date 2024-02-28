import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.medium_36};
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.medium_24};
        font-family: ${({ theme }) => theme.fonts.secondary};
    }
`;
