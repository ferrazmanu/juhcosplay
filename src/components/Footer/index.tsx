import { FC } from 'react';
import { Wrapper } from './styles';

const Footer: FC = () => {
    return (
        <Wrapper>
            <span>
                Site:
                <a
                    href="https://www.linkedin.com/in/ferrazmanuela/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Manuela Ferraz
                </a>
            </span>
        </Wrapper>
    );
};
export default Footer;
