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
                <div className="column is-4 is-offset-7 has-text-centered">
                    <div
                        style={{
                            width: '100%',
                            display: 'inline-block'
                        }}
                    >
                        <PreviewCompatibleImage imageInfo={rightImageInfo} />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-4 is-offset-1 has-text-centered">
                    <div
                        style={{
                            width: '100%',
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
