import { Container, FullContainer } from '../../components/Container';
import { Wrapper } from './styles';
import { useRouteError } from 'react-router-dom';

import Button from '../../components/Button';

const NotFound: React.FC = () => {
    const error: unknown = useRouteError();
    console.error(error);

    return (
        <Wrapper>
            <FullContainer fullgradient={true}>
                <Container fullheight center>
                    <div className="not-found">
                        <p>
                            <i>
                                {(error as Error)?.message ||
                                    (error as { statusText?: string })
                                        ?.statusText}
                            </i>
                        </p>
                        <p>
                            Ops! Parece que você está tentando acessar uma
                            página que não existe ou está com erro. Que tal
                            voltar à página inicial?
                        </p>

                        <Button
                            maxWidth="300px"
                            text="Voltar ao inicio"
                            type="button"
                            onClick={() => (window.location.href = '/')}
                        />
                    </div>
                </Container>
            </FullContainer>
        </Wrapper>
    );
};

export default NotFound;
