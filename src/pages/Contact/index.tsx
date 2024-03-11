import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { MainWrapper } from '../../components/MainWrapper';
import Loading from '../../components/Loading';
import { Inputs, SocialProps, SocialsProps } from '../../types/types';
import client from '../../service/config';
import { socialsQuery } from '../../data/queries';
import * as S from '../../components/ContactInfo';
import { ContactForm } from '../../components/ContactInfo';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import PageContent from '../../components/PageContent';

const Contact: React.FC = () => {
    const [allSocials, setAllSocials] = useState<SocialProps[]>([]);
    const [loading, setLoading] = useState(false);

    const hookForm = useForm<Inputs>();

    const fetchSocials = async () => {
        setLoading(true);
        try {
            const { socials }: SocialsProps =
                await client.request(socialsQuery);
            setAllSocials(socials);

            if (!socials) {
                throw new Error('Network response was not ok');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const number = '+554399863824';
        const message = data.message;

        let url = `https://api.whatsapp.com/send?phone=${number}`;
        url += `&text=${encodeURI(message)}`;

        window.open(url);
        hookForm.reset();
    };

    useEffect(() => {
        fetchSocials();
    }, []);

    return (
        <MainWrapper>
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                    <S.ContactWrapper>
                        <PageContent title={'Contato'} />

                        <S.ContactInfo>
                            <p className="strong-text">
                                Me encontre nas redes sociais:
                            </p>
                            <div className="socials">
                                {allSocials.map((item) => {
                                    return (
                                        <a
                                            key={item.id}
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </S.ContactInfo>
                        <p className="strong-text">Ou me envie uma mensagem:</p>

                        <ContactForm onSubmit={hookForm.handleSubmit(onSubmit)}>
                            <div className="info-wrapper">
                                <Label>Nome</Label>
                                <Input
                                    {...hookForm.register('name', {
                                        required: true,
                                    })}
                                    placeholder="Digite seu nome aqui..."
                                />
                                {hookForm.formState.errors.name && (
                                    <span className="error">
                                        Esse campo é obrigatório
                                    </span>
                                )}
                            </div>

                            <div className="info-wrapper">
                                <Label>Mensagem</Label>
                                <TextArea
                                    {...hookForm.register('message', {
                                        required: true,
                                    })}
                                    placeholder="Digite sua mensagem aqui..."
                                />
                                {hookForm.formState.errors.message && (
                                    <span className="error">
                                        Esse campo é obrigatório
                                    </span>
                                )}
                            </div>

                            <Button type="submit" text="Enviar" />
                        </ContactForm>
                    </S.ContactWrapper>
                )}
            </Container>
        </MainWrapper>
    );
};

export default Contact;
