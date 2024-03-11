import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { MainWrapper } from '../../components/MainWrapper';
import Loading from '../../components/Loading';
import { SocialProps, SocialsProps } from '../../types/types';
import client from '../../service/config';
import { socialsQuery } from '../../data/queries';
import { ContactInfo } from '../../components/ContactInfo';

const Contact: React.FC = () => {
    const [allSocials, setAllSocials] = useState<SocialProps[]>([]);

    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        fetchSocials();
    }, []);

    return (
        <MainWrapper>
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <ContactInfo>
                            {allSocials.map((item) => {
                                return <span key={item.id}>{item.name}</span>;
                            })}
                        </ContactInfo>
                    </>
                )}
            </Container>
        </MainWrapper>
    );
};

export default Contact;
