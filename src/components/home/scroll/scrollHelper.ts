import {
    GatsbyImageSharpFluidFragment,
    MarkdownRemarkFrontmatterArticles,
    Maybe
} from 'types/graphql-types';

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
<<<<<<< HEAD
    from?: {
        offsetTop: number;
        offsetHeight: number;
        offsetLeft: number;
        offsetWidth: number;
    },
    to?: {
        offsetTop: number;
        offsetHeight: number;
        offsetLeft: number;
        offsetWidth: number;
    },
    line?: { style: { [x: string]: string; top: string; left: string; height: string } }
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

        line.style.top = `${top}px`;
        line.style.left = `${left}px`;

        line.style['-webkit-transform'] = `rotate(${ANG}deg)`;
        line.style['-moz-transform'] = `rotate(${ANG}deg)`;
        line.style['-ms-transform'] = `rotate(${ANG}deg)`;
        line.style['-o-transform'] = `rotate(${ANG}deg)`;
        line.style['-transform'] = `rotate(${ANG}deg)`;
        line.style.height = `${0}px`;

        return H;
=======
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

        line.style['-webkit-transform'] = `rotate(${angle}deg)`;
        line.style['-moz-transform'] = `rotate(${angle}deg)`;
        line.style['-ms-transform'] = `rotate(${angle}deg)`;
        line.style['-o-transform'] = `rotate(${angle}deg)`;
        line.style['-transform'] = `rotate(${angle}deg)`;
        line.style['transform-origin'] = `0% 0%`;
        line.style.height = `${1}px`;

        return height;
>>>>>>> e1a44b09a14023d512216899abd7139c627c7cd8
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
