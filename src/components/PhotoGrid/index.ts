import styled from 'styled-components';

const MIN_WIDTH_DESK = '384px';
const MIN_WIDTH_MOBILE = '200px';

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${MIN_WIDTH_DESK}, auto));
    flex-wrap: wrap;
    width: 100%;

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

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
`;
