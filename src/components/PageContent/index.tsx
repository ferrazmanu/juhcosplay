import { FC } from 'react';
import * as S from './styles';

interface Props {
    title?: string;
    text?: string;
}

const PageContent: FC<Props> = ({ title, text }) => {
    return (
        <S.Wrapper>
            <h2>{title}</h2>

            <p>{text}</p>
        </S.Wrapper>
    );
};

export default PageContent;
