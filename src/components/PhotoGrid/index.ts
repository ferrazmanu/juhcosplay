import styled from 'styled-components';

const MIN_WIDTH_DESK = '384px';
const MIN_WIDTH_MOBILE = '200px';

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${MIN_WIDTH_DESK}, auto));
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;

    @media only screen and (max-width: 992px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(${MIN_WIDTH_MOBILE}, auto)
        );
    }
`;

export const GridItem = styled.div`
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    cursor: pointer;
    border: 8px solid ${({ theme }) => theme.colors.secondary};
    position: relative;
    overflow: hidden;

    &:hover {
        .info {
            transform: translateY(0%);
        }
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 10px 8px;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
        transform: translateY(100%);
        transition: 0.3s ease-in-out;

        h5 {
            font-family: ${({ theme }) => theme.fonts.secondary};
            text-transform: unset;
            font-size: ${({ theme }) => theme.fontSizes.small_18};
        }

        .tags {
            display: flex;
            gap: 4px;
            font-size: ${({ theme }) => theme.fontSizes.small_12};
        }
    }
`;
