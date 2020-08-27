import React, { RefObject, createRef, useEffect, useReducer, useRef, useState } from 'react';

import PreviewCompatibleImage from '../PreviewCompatibleImage';

import { BrowserView, isBrowser, isMobile } from 'react-device-detect';

import { Link } from 'gatsby';

import {
    ArticleElement,
    ArticleType,
    adjustLine,
    createInitialArticleState,
    getScrollLineHeight,
    scrollHandler
} from './scroll/scrollHelper';

import './animation.css';

import { Line, lineActions, lineReducer, lineReducerInput } from './scroll/lineReducer';

import useEventListener from './useEventListener';

import useScrollSpy from './useScrollSpy';

const ArticleBubbles = ({ articles }: ArticleType) => {
    const articleElements = React.useRef<Array<ArticleElement>>([]);

    const scrollLineHeight = useRef(16);

    const [prevLineIndex, setPrevLineIndex] = useState(-1);

    const [lines, lineDispatch] = useReducer<React.Reducer<Line[], lineReducerInput>>(
        lineReducer,
        []
    );

    const [articleRefs, setArticleRefs] = useState<Array<RefObject<HTMLDivElement>>>([]);

    const [scrollRefs, setScrollRefs] = useState<Array<RefObject<HTMLDivElement>>>([]);

    const scrollableRef = useRef<HTMLDivElement | null>(null);

    const currentLineGoingDown = useScrollSpy({
        sectionElementRefs: articleRefs,
        offsetPx: -500,
        activeSectionDefault: -1
    });

    useEffect(() => {
        if (prevLineIndex === -1) {
            setPrevLineIndex(currentLineGoingDown);
        } else {
            const prevLine = lines[prevLineIndex];

            if (prevLine && prevLine?.lineRef?.current) {
                if (prevLineIndex < currentLineGoingDown) {
                    prevLine.lineRef.current.style.height = `${prevLine.height}px`;
                } else {
                    prevLine.lineRef.current.style.height = `0px`;
                }
            }
            setPrevLineIndex(currentLineGoingDown);
        }
    }, [currentLineGoingDown]);

    useEffect(() => {
        articleElements.current = createInitialArticleState({ articles });
        scrollLineHeight.current = getScrollLineHeight() || 16;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isBrowser) {
            const blurbs_num = 10;
            let i;
            // console.log('Line Updater Called');
            const temp = Array(blurbs_num).fill(0);
            for (i = 0; i < blurbs_num; i++) {
                if (!lines[i]?.height) {
                    const objHeight = adjustLine(
                        articleRefs[i]?.current,
                        articleRefs[i + 1]?.current,
                        lines[i]?.lineRef.current
                    );
                    temp[i] = objHeight;
                    lineDispatch({ type: lineActions.updateHeight, index: i, height: objHeight });
                }
            }
        }
    }, [articleRefs]);

    useEffect(() => {
        let currentIndex = currentLineGoingDown;
        if (currentIndex != -1 && lines[currentIndex]) {
            const { lineRef, position } = lines[currentIndex];
            if (lineRef && lineRef.current) {
                lineRef.current.style.height = `${position}px`;
            }
        }
    }, [lines, currentLineGoingDown]);

    useEffect(() => {
        const newLines = Array(articleElements.current.length - 1)
            .fill(0)
            .map((_, i) => {
                return {
                    ...lines[i],
                    lineRef: lines[i]?.lineRef || createRef(),
                    position: 0,
                    height: lines[i]?.height || 0
                };
            });
        lineDispatch({ type: lineActions.setLines, newLines: newLines, index: 0 });
        setArticleRefs(
            Array(articleElements.current.length)
                .fill(0)
                .map((_, i) => articleRefs[i] || createRef())
        );
        setScrollRefs(
            Array(articleElements.current.length)
                .fill(0)
                .map((_, i) => scrollRefs[i] || createRef())
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articleElements.current.length]);

    useEventListener(scrollableRef, 'wheel', (e: WheelEvent) => {
        let currentIndex = currentLineGoingDown;
        // console.group('Scroll Loop');
        if (lines[currentIndex]) {
            const { height, position } = lines[currentIndex];
            // console.log('Triggering Draw Event for Index', currentIndex, lines[currentIndex]);
            const newPosition = scrollHandler(e, height, position, scrollLineHeight.current);
            // console.log('New Position', newPosition);
            lineDispatch({
                type: lineActions.updatePosition,
                index: currentIndex,
                position: newPosition
            });
        }
    });

    return (
        <>
            <div ref={scrollableRef}>
                {articleElements.current.map((article, index) => {
                    const { title, subtitle, path } = article.imageObject;
                    return (
                        <section
                            className="section bubble-wrapper"
                            key={`section-${index}`}
                            ref={scrollRefs[index]}
                        >
                            <div className={`bubble-image ${article.className}`}>
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
                                    <div
                                        className="line grow-transition"
                                        id={`line-${index}`}
                                        ref={lines[index]?.lineRef}
                                    />
                                </BrowserView>
                            </div>
                            <div className={`bubble-text ${article.className}`}>
                                <Link to={path ? path : '/'}>
                                    <h3 className="article-link title">{title}</h3>
                                    <p className="article-link byline">{subtitle}</p>
                                </Link>
                            </div>
                        </section>
                    );
                })}
                <style jsx>
                    {`
                        .line {
                            position: absolute;
                            width: 2px;
                            height: 1px;
                            background-color: black;
                            z-index: -1;
                            margin-top: 1px;
                        }
                        * {
                            padding: 0px;
                            margin: 0px;
                            box-sizing: border-box;
                        }
                        .bubble-text {
                            z-index: 1;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            flex-direction: column;
                        }
                        .bubble-image {
                            z-index: 0;
                        }
                        .bubble-wrapper {
                            display: grid;
                            grid-template: 1fr / 1fr;
                            margin-top: ${isMobile ? '12vh' : ''};
                        }

                        .bubble-wrapper > * {
                            grid-column: 1 / 1;
                            grid-row: 1 / 1;
                        }
                        .byline {
                            color: black;
                        }
                        .article-link:hover {
                            text-decoration: underline;
                        }
                        .title {
                            font-size: ${isMobile ? '1.25em' : '1.5em'} !important;
                            margin-bottom: ${isMobile ? '0.8em' : '0.6666em'} !important;
                        }
                    `}
                </style>
            </div>
        </>
    );
};

export default ArticleBubbles;
