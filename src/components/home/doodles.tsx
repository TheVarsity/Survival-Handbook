import React, { useEffect } from 'react';

import { ImageSharpFluid } from 'types/graphql-types';

import { isMobile } from 'react-device-detect';

import PreviewCompatibleImage from '../PreviewCompatibleImage';

type DoodlesTypes = {
    doodles: RecursiveNonNullable<{
        image?:
            | {
                  childImageSharp?:
                      | {
                            fluid?:
                                | Pick<
                                      ImageSharpFluid,
                                      'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
                                  >
                                | null
                                | undefined;
                        }
                      | null
                      | undefined;
              }
            | null
            | undefined;
    }>[];
};

type DoodleElementType = {
    style?: {};
    className: string;
    imageObject: {
        alt?: string;
        childImageSharp?: { fluid?: any };
        image?: string | { childImageSharp?: { fluid?: any } };
        style?: object;
    };
};

const Doodles = ({ doodles }: DoodlesTypes) => {
    const [doodleElements, setDoodleElements] = React.useState<DoodleElementType[]>([]);
    useEffect(() => {
        if (!isMobile) {
            setDoodleElements([
                {
                    className: 'column is-5 is-offset-1',
                    style: { paddingTop: '35vh' },
                    imageObject: { ...doodles[0], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-7',
                    style: { paddingTop: '10vh' },
                    imageObject: { ...doodles[1], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-1',
                    style: { marginTop: '-5vh' },
                    imageObject: { ...doodles[2], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-7',

                    imageObject: { ...doodles[3], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-1',
                    imageObject: { ...doodles[4], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-8',
                    imageObject: { ...doodles[5], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-2',
                    style: { paddingTop: '35vh' },
                    imageObject: { ...doodles[6], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-7',
                    style: { paddingTop: '10vh' },
                    imageObject: { ...doodles[7], alt: '' }
                }
            ]);
        } else {
            setDoodleElements([
                {
                    className: 'column is-5 is-offset-3',
                    style: { marginTop: '-15vh', maxWidth: '80vw' },
                    imageObject: { ...doodles[0], alt: '' }
                },
                {
                    className: 'column is-mobile is-three-quarters-mobile',
                    style: { paddingTop: '15vh', maxWidth: '80vw', marginLeft: '20vw' },
                    imageObject: { ...doodles[1], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-1',
                    style: { marginTop: '20vh', maxWidth: '80vw' },
                    imageObject: { ...doodles[2], alt: '' }
                },
                {
                    className: 'column is-mobile is-12-mobile',
                    style: { marginTop: '67vh', marginLeft: '10vw' },
                    imageObject: { ...doodles[3], alt: '' }
                },
                {
                    className: 'column is-9-mobile is-offset-1',
                    style: { marginTop: '73vh', marginLeft: '10vw', transform: 'rotate(-30deg)' },
                    imageObject: { ...doodles[4], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-8',
                    style: {
                        marginTop: '17vh',
                        marginLeft: '10vw',
                        transform: 'rotate(-12deg)'
                    },
                    imageObject: { ...doodles[5], alt: '' }
                },
                {
                    className: 'column is-10-mobile is-offset-2',
                    style: { paddingTop: '23vh' },
                    imageObject: { ...doodles[6], alt: '' }
                },
                {
                    className: 'column is-5 is-offset-7',
                    style: { paddingTop: '82vh' },
                    imageObject: { ...doodles[7], alt: '' }
                }
            ]);
        }

        console.log('Mounted!', doodles, doodleElements);
        return console.log('Unmounting doodles...');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {doodleElements.map((doodle, index) => {
                return (
                    <div className={doodle.className} style={doodle.style} key={`doodle-${index}`}>
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={doodle.imageObject} />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Doodles;
