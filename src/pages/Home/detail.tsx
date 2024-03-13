import React, { useEffect, useState } from 'react';
import client from '../../service/config';

import FsLightbox from 'fslightbox-react';

import { MainWrapper } from '../../components/MainWrapper';
import { GridItem, PhotoGrid } from '../../components/PhotoGrid';
import Loading from '../../components/Loading';

import { EventProps } from '../../types/types';
import { Container } from '../../components/Container';
import { eventQuery } from '../../data/queries';
import { useParams } from 'react-router-dom';
import PageContent from '../../components/PageContent';
import { formatDate } from '../../utils/fromat';

const CosplayDetail: React.FC = () => {
    const [eventData, setEventData] = useState<EventProps>();
    const [loading, setLoading] = useState(false);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        sourceIndex: 0,
    });

    const { slug } = useParams();

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const { event }: { event: EventProps } = await client.request(
                eventQuery,
                {
                    slug,
                }
            );
            setEventData(event);

            if (!event) {
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
            <Container fullheight>
                {loading ? (
                    <Loading fullPage />
                ) : (
                    <>
                        <PageContent
                            title={eventData?.tituloCosplay}
                            text={`${eventData?.eventName} - ${eventData?.date && formatDate(eventData.date)}`}
                        >
                            <div className="tags">
                                {eventData?.tags.map((tag) => (
                                    <span key={tag}>#{tag}</span>
                                ))}
                            </div>
                        </PageContent>
                        <PhotoGrid>
                            {eventData?.image.map((item, index) => {
                                return (
                                    <GridItem
                                        key={item.id}
                                        onClick={() => {
                                            setLightboxController({
                                                toggler:
                                                    !lightboxController.toggler,
                                                sourceIndex: index,
                                            });
                                        }}
                                    >
                                        <img src={item.url} loading="eager" />
                                    </GridItem>
                                );
                            })}
                        </PhotoGrid>
                    </>
                )}
            </Container>

            <FsLightbox
                toggler={!!lightboxController.toggler}
                sourceIndex={lightboxController.sourceIndex}
                sources={eventData?.image.map((image) => image.url)}
            />
        </MainWrapper>
    );
};

export default CosplayDetail;
