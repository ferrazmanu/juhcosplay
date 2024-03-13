import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { MainWrapper } from '../../components/MainWrapper';
import PageContent from '../../components/PageContent';
import Loading from '../../components/Loading';
import { PageProps } from '../../types/types';
import client from '../../service/config';
import { aboutPageQuery } from '../../data/queries';

const About: React.FC = () => {
    const [pageContent, setPageContent] = useState<PageProps>({
        page: {
            mainText: {
                html: '',
            },
            pageName: '',
        },
    });

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

    useEffect(() => {
        fetchText();
    }, []);

    return (
        <MainWrapper>
            <Container fullheight>
                {loading ? (
                    <Loading fullPage />
                ) : (
                    <PageContent
                        title={pageContent.page.pageName}
                        htmlText={pageContent.page.mainText.html}
                    />
                )}
            </Container>
        </MainWrapper>
    );
};

export default About;
