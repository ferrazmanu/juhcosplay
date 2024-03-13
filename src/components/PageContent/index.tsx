import { FC, ReactNode } from 'react';
import * as S from './styles';

interface Props {
    title?: string;
    text?: string;
    htmlText?: string | TrustedHTML;
    children?: ReactNode;
}

const PageContent: FC<Props> = ({ title, text, children, htmlText }) => {
    return (
        <S.Wrapper>
            <h2>{title}</h2>

            {htmlText && <div dangerouslySetInnerHTML={{ __html: htmlText }} />}

            {text && <p>{text}</p>}

            {children && children}
        </S.Wrapper>
    );
};

export default PageContent;
