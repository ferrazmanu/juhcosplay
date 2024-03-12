import { FC, ReactNode } from 'react';
import * as S from './styles';

interface Props {
    title?: string;
    text?: string;
    children?: ReactNode;
}

const PageContent: FC<Props> = ({ title, text, children }) => {
    return (
        <S.Wrapper>
            <h2>{title}</h2>

            {text && <p>{text}</p>}

            {children && children}
        </S.Wrapper>
    );
};

export default PageContent;
