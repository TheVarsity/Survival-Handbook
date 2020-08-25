import React, { createRef, useEffect, useState } from 'react';

import PreviewCompatibleImage from '../PreviewCompatibleImage';

import { BrowserView, isBrowser } from 'react-device-detect';

import {
    GatsbyImageSharpFluidFragment,
    MarkdownRemarkFrontmatterArticles,
    Maybe
} from 'types/graphql-types';

type ArticleType = {
    articles: Maybe<
        Pick<MarkdownRemarkFrontmatterArticles, 'heading' | 'description'> & {
            blurbs?: Maybe<
                Array<
                    Maybe<{
                        image?: Maybe<{
                            childImageSharp?: Maybe<{
                                fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                            }>;
                        }>;
                    }>
                >
            >;
        }
    >;
};

type ArticleElement = {
    className: string;
    imageObject: {
        alt?: string;
        childImageSharp?: { fluid?: any };
        image?: string | { childImageSharp?: { fluid?: any } };
        style?: object;
    };
};

const adjustLine = (
    from: { offsetTop: number; offsetHeight: number; offsetLeft: number; offsetWidth: number },
    to: { offsetTop: number; offsetHeight: number; offsetLeft: number; offsetWidth: number },
    line: { style: { [x: string]: string; top: string; left: string; height: string } }
) => {
    if (from && to && line) {
        let fT = from.offsetTop + from.offsetHeight / 2;

        let tT = to.offsetTop + to.offsetHeight / 2;

        let fL = from.offsetLeft + from.offsetWidth / 2;

        let tL = to.offsetLeft + to.offsetWidth / 2;

        let CA = Math.abs(tT - fT);
        let CO = Math.abs(tL - fL);
        let H = Math.sqrt(CA * CA + CO * CO);
        let ANG = (180 / Math.PI) * Math.acos(CA / H);
        let top, left;
        if (tT > fT) {
            top = (tT - fT) / 2 + fT;
        } else {
            top = (fT - tT) / 2 + tT;
        }
        if (tL > fL) {
            left = (tL - fL) / 2 + fL;
        } else {
            left = (fL - tL) / 2 + tL;
        }

        if (
            (fT < tT && fL < tL) ||
            (tT < fT && tL < fL) ||
            (fT > tT && fL > tL) ||
            (tT > fT && tL > fL)
        ) {
            ANG *= -1;
        }
        top -= H / 2;

        line.style['-webkit-transform'] = `rotate(${ANG}deg)`;
        line.style['-moz-transform'] = `rotate(${ANG}deg)`;
        line.style['-ms-transform'] = `rotate(${ANG}deg)`;
        line.style['-o-transform'] = `rotate(${ANG}deg)`;
        line.style['-transform'] = `rotate(${ANG}deg)`;
        line.style.top = `${top}px`;
        line.style.left = `${left}px`;
        line.style.height = `${H}px`;
    }
};

const ArticleBubbles = ({ articles }: ArticleType) => {
    const articleElements = React.useRef<ArticleElement[]>([]);
    const [lineRefs, setLineRefs] = useState([]);
    const [articleRefs, setArticleRefs] = useState([]);

    useEffect(() => {
        articleElements.current = [
            {
                className: 'column is-5 is-offset-3',
                imageObject: { ...articles?.blurbs[0], alt: '' }
            },
            {
                className: 'column is-4 is-offset-7',
                imageObject: { ...articles?.blurbs[1], alt: '' }
            },
            {
                className: 'column is-4 is-offset-2',
                imageObject: { ...articles?.blurbs[2], alt: '' }
            },
            {
                className: 'column is-5 is-offset-6',
                imageObject: { ...articles?.blurbs[3], alt: '' }
            },
            {
                className: 'column is-4 is-offset-1',
                imageObject: { ...articles?.blurbs[4], alt: '' }
            },
            {
                className: 'column is-6 is-offset-5',
                imageObject: { ...articles?.blurbs[5], alt: '' }
            },
            {
                className: 'column is-5 is-offset-3',
                imageObject: { ...articles?.blurbs[6], alt: '' }
            },
            {
                className: 'column is-4',
                imageObject: { ...articles?.blurbs[7], alt: '' }
            },
            {
                className: 'column is-5 is-offset-8',
                imageObject: { ...articles?.blurbs[8], alt: '' }
            },
            {
                className: 'column is-5 is-offset-2',
                imageObject: { ...articles?.blurbs[9], alt: '' }
            },
            {
                className: 'column is-5 is-offset-7',
                imageObject: { ...articles?.blurbs[10], alt: '' }
            }
        ];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (isBrowser) {
            let blurbs_num = 10;
            let i;
            for (i = 0; i < blurbs_num; i++) {
                adjustLine(
                    articleRefs[i]?.current,
                    articleRefs[i + 1]?.current,
                    lineRefs[i]?.current
                );
            }
        }
    }, [articleRefs, lineRefs]);

    useEffect(() => {
        setLineRefs(
            Array(articleElements.current.length)
                .fill()
                .map((_, i) => lineRefs[i] || createRef())
        );
        setArticleRefs(
            Array(articleElements.current.length)
                .fill()
                .map((_, i) => articleRefs[i] || createRef())
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articleElements.current.length]);

    return (
        <>
            <div>
                {articleElements.current.map((article, index) => {
                    return (
                        <div className={article.className} key={`article-${index}`}>
                            <div
                                style={{
                                    width: '100%',
                                    display: 'inline-block'
                                }}
                                ref={articleRefs[index]}
                                className={`blurbs-${index}`}
                            >
                                <PreviewCompatibleImage imageInfo={article.imageObject} />
                            </div>
                            <BrowserView>
                                <div className="line" id={`line-${index}`} ref={lineRefs[index]} />
                            </BrowserView>
                        </div>
                    );
                })}
                <style jsx>
                    {`
                        .line {
                            position: absolute;
                            width: 2px;
                            height: 1px;
                            margin-top: -1px;
                            background-color: black;
                            z-index: -1;
                        }

                        * {
                            padding: 0px;
                            margin: 0px;
                            box-sizing: border-box;
                        }
                    `}
                </style>
            </div>
        </>
    );
};

export default ArticleBubbles;
