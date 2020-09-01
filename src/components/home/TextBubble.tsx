import { IndexPageTemplateQuery } from 'types/graphql-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import React from 'react';

import './bubbles.css';

import { isMobile } from 'react-device-detect';

type TextBubbleProps = RecursiveNonNullable<
    IndexPageTemplateQuery
>['markdownRemark']['frontmatter']['advice'];

const TextBubble = ({ left, right, text }: TextBubbleProps) => {
    const leftImageInfo = {
        image: left,
        childImageSharp: left.childImageSharp,
        alt: 'Left Text Bubble',
        style: {}
    };

    const rightImageInfo = {
        image: right,
        childImageSharp: right.childImageSharp,
        alt: 'Right Text Bubble',
        style: {}
    };

    return (
        <>
            <div>
                <div className="bubble-wrapper columns">
                    <div className="bubble-image column is-5 is-offset-7 has-text-centered is-12-mobile">
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={rightImageInfo} />
                        </div>
                    </div>
                    <div className="bubble-text column is-5 is-offset-7 is-12-mobile">
                        <p style={{ maxWidth: '80%', fontWeight: 'bold' }}>{text ? text[0] : ''}</p>
                    </div>
                </div>
                <div className="bubble-wrapper columns">
                    <div className="bubble-image column is-5 is-offset-1 is-12-mobile has-text-centered ">
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={leftImageInfo} />
                        </div>
                    </div>
                    <div className="bubble-text column is-5 is-offset-1   is-12-mobile">
                        <p style={{ maxWidth: '80%', fontWeight: 'bold' }}>{text ? text[1] : ''}</p>
                    </div>
                </div>
                <style jsx>{`
                    .bubble-image {
                        transform: ${isMobile ? 'scale(1.2)' : ''};
                    }
                    .bubble-wrapper {
                        padding-bottom: ${isMobile ? '5vh' : ''};
                    }
                `}</style>
            </div>
        </>
    );
};

export default TextBubble;
