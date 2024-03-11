import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { MainWrapper } from '../../components/MainWrapper';
import PageContent from '../../components/PageContent';
import Loading from '../../components/Loading';
import { PageProps, SocialProps, SocialsProps } from '../../types/types';
import client from '../../service/config';
import { aboutPageQuery, socialsQuery } from '../../data/queries';
import { ContactInfo } from '../../components/ContactInfo';

const About: React.FC = () => {
    const [pageContent, setPageContent] = useState<PageProps>({
        page: {
            mainText: '',
            pageName: '',
        },
    });
    const [allSocials, setAllSocials] = useState<SocialProps[]>([]);

    const [loading, setLoading] = useState(false);

    const fetchText = async () => {
        setLoading(true);
        try {
            const { page }: PageProps = await client.request(aboutPageQuery);
            setPageContent({ page });

            if (!page) {
                throw new Error('Network response was not ok');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

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
        fetchText();
        fetchSocials();
    }, []);

    return (
        <MainWrapper>
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <PageContent
                            title={pageContent.page.pageName}
                            text={pageContent.page.mainText}
                        />

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

export default About;
