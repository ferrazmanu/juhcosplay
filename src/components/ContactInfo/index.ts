import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing._30};

    .strong-text {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.fontSizes.medium_24};
        font-weight: 600;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .socials {
        display: flex;
        gap: 8px;
    }
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};

    .info-wrapper {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`;
