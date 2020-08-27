import { IndexPageTemplateQuery } from 'types/graphql-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import React from 'react';

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
                <div className="columns bubble-wrapper">
                    <div className="column is-4 is-offset-7 has-text-centered bubble-image">
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={rightImageInfo} />
                        </div>
                    </div>
                    <div className="column is-4 is-offset-7 bubble-text">
                        <h3>{text ? text[0] : ''}</h3>
                    </div>
                </div>
                <div className="columns bubble-wrapper">
                    <div className="column is-4 is-offset-1 has-text-centered bubble-image">
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={leftImageInfo} />
                        </div>
                    </div>
                    <div className="column is-4 is-offset-1  bubble-text">
                        <h3>{text ? text[1] : ''}</h3>
                    </div>
                </div>
                <style jsx>{`
                    .bubble-text {
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }
                    .bubble-image {
                        z-index: 0;
                    }
                    .bubble-wrapper {
                        display: grid;
                        grid-template: 1fr / 1fr;
                    }

                    .bubble-wrapper > * {
                        grid-column: 1 / 1;
                        grid-row: 1 / 1;
                    }
                `}</style>
            </div>
        </>
    );
};

export default TextBubble;
