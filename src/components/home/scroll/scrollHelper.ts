import {
    GatsbyImageSharpFluidFragment,
    MarkdownRemarkFrontmatterArticles,
    Maybe
} from 'types/graphql-types';

import { isMobile } from 'react-device-detect';

export const getScrollLineHeight = () => {
    const el = document.createElement('div');
    el.style.fontSize = 'initial';
    el.style.display = 'none';
    document.body.appendChild(el);
    const fontSize = window.getComputedStyle(el).fontSize;
    document.body.removeChild(el);
    return fontSize ? window.parseInt(fontSize) : undefined;
};

export const adjustLine = (
    from?: HTMLDivElement,
    to?: HTMLDivElement,
    line?: { style: { [x: string]: string; top: string; left: string; height: string } }
) => {
    if (from && to && line) {
        let fromTop = from.offsetTop + from.offsetHeight / 2;

        let toTop = to.offsetTop + to.offsetHeight / 2;

        let fromLeft = from.offsetLeft + from.offsetWidth / 2;

        let toLeft = to.offsetLeft + to.offsetWidth / 2;

        let adj = Math.abs(toTop - fromTop);
        let opp = Math.abs(toLeft - fromLeft);
        let height = Math.sqrt(adj * adj + opp * opp);
        let angle = (180 / Math.PI) * Math.acos(adj / height);

        if (
            (fromTop < toTop && fromLeft < toLeft) ||
            (toTop < fromTop && toLeft < fromLeft) ||
            (fromTop > toTop && fromLeft > toLeft) ||
            (toTop > fromTop && toLeft > fromLeft)
        ) {
            angle *= -1;
        }

        line.style.top = `${from.offsetTop + from.offsetHeight / 2}px`;
        line.style.left = `${from.offsetLeft + from.offsetWidth / 2}px`;

        if (!isMobile) {
            line.style['-webkit-transform'] = `rotate(${angle}deg)`;
            line.style['-moz-transform'] = `rotate(${angle}deg)`;
            line.style['-ms-transform'] = `rotate(${angle}deg)`;
            line.style['-o-transform'] = `rotate(${angle}deg)`;
            line.style['-transform'] = `rotate(${angle}deg)`;
        } else {
            const posOrNeg = (-1) ** (Math.floor(Math.random() * 2) + 1);
            const randomNumber = posOrNeg * (Math.floor(Math.random() * 15) + 1);
            line.style.transform = `skew(${randomNumber}deg)`;
        }

        line.style['transform-origin'] = `0% 0%`;
        line.style.height = `${1}px`;

        return height;
    }
    return 0;
};

export type ArticleType = {
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

export const createInitialArticleState = ({ articles }: ArticleType) => {
    if (articles && articles.blurbs) {
        return [
            {
                className: 'column is-5 is-offset-3',
                imageObject: { ...articles?.blurbs[0], alt: '' }
            },
            {
                className: 'column is-4 is-offset-7',
                imageObject: { ...articles?.blurbs[1], alt: '' }
            },
            {
                className: 'column is-5 is-offset-1',
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
            }
        ];
    }
    return [];
};

export type ArticleElement = {
    className: string;
    imageObject: {
        alt?: string;
        childImageSharp?: { fluid?: any };
        image?: string | { childImageSharp?: { fluid?: any } | null } | null;
        style?: object;
        title?: string;
        subtitle?: string;
        path?: string;
    };
};

export const scrollHandler = (
    e: WheelEvent,
    height: number,

    scrollLineHeight: number
) => {
    const deltaYLines = e.deltaY;

    // console.log('Mode | Lines | Height', e.deltaMode, deltaYLines, scrollLineHeight);
    const deltaY = scrollLineHeight ? Math.max(scrollLineHeight * deltaYLines) : 20 * deltaYLines;
    // console.log(e.deltaMode)

    // console.log('Delta Y', deltaY);

    return deltaY;
};
