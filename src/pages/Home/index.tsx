import React, { useEffect, useState } from 'react';
import client from '../../service/config';

import FsLightbox from 'fslightbox-react';

import { MainWrapper } from '../../components/MainWrapper';
import { GridItem, PhotoGrid } from '../../components/PhotoGrid';
import Loading from '../../components/Loading';

import { EventProps, EventsProps, PageProps } from '../../types/types';
import { Container } from '../../components/Container';
import PageContent from '../../components/PageContent';
import { formatDate } from '../../utils/fromat';
import { eventQuery, homePageQuery } from '../../data/queries';

const Home: React.FC = () => {
    const [allEvents, setAllEvents] = useState<EventProps[]>([]);
    const [pageContent, setPageContent] = useState<PageProps>({
        page: {
            mainText: '',
            pageName: '',
        },
    });
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [toggler, setToggler] = useState<boolean>(false);

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const { events }: EventsProps = await client.request(eventQuery);
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
                            text={pageContent.page.mainText}
                        />
                        <PhotoGrid>
                            {allEvents.map((item) => {
                                return (
                                    <GridItem
                                        key={item.id}
                                        onClick={() => {
                                            setToggler(!toggler);
                                            setImages(
                                                item.image.map((x) => x.url)
                                            );
                                        }}
                                    >
                                        <img
                                            src={item.image[0].url}
                                            alt=""
                                            loading="eager"
                                        />
                                        <div className="info">
                                            <h5>
                                                {item.tituloCosplay} -{' '}
                                                {item.name}
                                            </h5>
                                            <span>{formatDate(item.date)}</span>
                                            <div className="tags">
                                                {item.tags.map((tag) => (
                                                    <span key={tag}>
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </GridItem>
                                );
                            })}
                        </PhotoGrid>
                    </>
                )}
            </Container>

            <FsLightbox toggler={!!toggler} sources={images} />
        </MainWrapper>
    );
};

export default Home;
