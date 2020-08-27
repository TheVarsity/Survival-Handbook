import React, { useEffect } from 'react';

import { ImageSharpFluid } from 'types/graphql-types';

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
