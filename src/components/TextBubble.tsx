import { IndexPageTemplateQuery } from 'types/graphql-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import React from 'react';

type TextBubbleProps = RecursiveNonNullable<
    IndexPageTemplateQuery
>['markdownRemark']['frontmatter']['advice'];

const TextBubble = ({ left, right }: TextBubbleProps) => {
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
            <div className="columns">
                <div className="column is-12">
                    <div className="advice-right-wrapper">
                        <div
                            style={{
                                width: '26.64vw',
                                display: 'inline-block'
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={rightImageInfo} />
                        </div>
                        {/* @ts-ignore Styled JSX*/}
                        <style jsx>
                            {`
                                .advice-right-wrapper {
                                    display: flex;
                                    justify-content: flex-end;
                                    width: 70vw;
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-6 is-offset-1 has-text-centered">
                    <div
                        style={{
                            width: '26.64vw',
                            display: 'inline-block'
                        }}
                    >
                        <PreviewCompatibleImage imageInfo={leftImageInfo} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextBubble;
