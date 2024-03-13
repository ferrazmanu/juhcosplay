import React, { useEffect, useState } from 'react';
import client from '../../service/config';

import { MainWrapper } from '../../components/MainWrapper';
import { GridItem, PhotoGrid } from '../../components/PhotoGrid';
import Loading from '../../components/Loading';

import { EventProps, EventsProps, PageProps } from '../../types/types';
import { Container } from '../../components/Container';
import PageContent from '../../components/PageContent';
import { formatDate } from '../../utils/fromat';
import { eventsQuery, homePageQuery } from '../../data/queries';

const Home: React.FC = () => {
    const [allEvents, setAllEvents] = useState<EventProps[]>([]);
    const [pageContent, setPageContent] = useState<PageProps>({
        page: {
            mainText: {
                html: '',
            },
            pageName: '',
        },
    });
    const [loading, setLoading] = useState(false);

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const { events }: EventsProps = await client.request(eventsQuery);
            setAllEvents(events);

            if (!events) {
                throw new Error('Network response was not ok');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const fetchText = async () => {
        setLoading(true);
        try {
            const { page }: PageProps = await client.request(homePageQuery);
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
        fetchEvents();
        fetchText();
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
                            htmlText={pageContent.page.mainText.html}
                        />
                        <PhotoGrid>
                            {allEvents.map((item) => {
                                return (
                                    <GridItem
                                        key={item.id}
                                        href={`/cosplay/${item.slug}`}
                                    >
                                        <img
                                            src={item.image[0].url}
                                            loading="eager"
                                        />
                                        <div className="info">
                                            <h5>
                                                {item.tituloCosplay} -{' '}
                                                {item.eventName}
                                            </h5>
                                            <span>{formatDate(item.date)}</span>
                                        </div>
                                    </GridItem>
                                );
                            })}
                        </PhotoGrid>
                    </>
                )}
            </Container>
        </MainWrapper>
    );
};

export default Home;
