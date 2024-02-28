import React, { useEffect, useState } from 'react';
import client from '../../service/config';
import { gql } from 'graphql-request';

import FsLightbox from 'fslightbox-react';

import { MainWrapper } from '../../components/MainWrapper';
import { GridItem, PhotoGrid } from '../../components/PhotoGrid';
import Loading from '../../components/Loading';

import { EventProps, EventsProps } from '../../types/types';
import { Container } from '../../components/Container';
import PageContent from '../../components/PageContent';

const Home: React.FC = () => {
    const [allEvents, setAllEvents] = useState<EventProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [toggler, setToggler] = useState<boolean>(false);

    const fetchEvents = async () => {
        setLoading(true);
        const eventQuery = gql`
            query Events {
                events {
                    name
                    id
                    description
                    image {
                        url
                        id
                    }
                }
            }
        `;

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

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <MainWrapper>
            <Container>
                <PageContent
                    title="JuhCosplay"
                    text={
                        'Erat nam at lectus urna duis convallis convallis tellus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.'
                    }
                />
            </Container>

            {loading ? (
                <Loading />
            ) : (
                <PhotoGrid>
                    {allEvents.map((item) => {
                        return (
                            <GridItem
                                key={item.id}
                                onClick={() => {
                                    setToggler(!toggler);
                                    setImages(item.image.map((x) => x.url));
                                }}
                            >
                                <img
                                    src={item.image[0].url}
                                    alt=""
                                    loading="eager"
                                />
                            </GridItem>
                        );
                    })}
                </PhotoGrid>
            )}

            <FsLightbox toggler={!!toggler} sources={images} />
        </MainWrapper>
    );
};

export default Home;