/* eslint-disable @typescript-eslint/restrict-plus-operands */

// Modules
import { graphql } from 'gatsby';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { IndexPageTemplateQuery } from 'types/graphql-types';
import Layout from '../components/Layout';

// Components
import { HTMLContent } from '../components/Content';

//import ArticleHead from '../components/ArticleHead';
import TextBubble from '../components/home/TextBubble';
import VideoContainer from '../components/home/VideoContainer';

import Doodles from '../components/home/doodles';
import Navbar from '../components/Navbar';

import ArticleBubbles from '../components/home/articleBubbles';

// Hooks

import useScrollSpy from '../components/home/useScrollSpy';

type IndexPageTemplateProps = RecursiveNonNullable<
    IndexPageTemplateQuery
>['markdownRemark']['frontmatter'];

export const IndexPageTemplate = ({
    image,
    cover,
    mainImage,
    editorNote,
    advice,
    articles,
    doodles,
    covidGuidelines,
    video
}: IndexPageTemplateProps) => {
    const [floatingNav, setFloatingNav] = useState(true);

    const parallaxRef = useRef<HTMLDivElement | null>(null);

    const bodyRef = useRef<HTMLElement | null>(null);

    const currentSection = useScrollSpy({
        sectionElementRefs: [parallaxRef, bodyRef]
    });

    useEffect(() => {
        if (currentSection === 0) {
            setFloatingNav(true);
        } else {
            setFloatingNav(false);
        }
    }, [currentSection]);

    return (
        <>
            <div>
                <div ref={parallaxRef}>
                    <VideoContainer
                        mp4={video.mp4}
                        webm={video.webm}
                        chevron={true}
                        cover={mainImage}
                        image={cover}
                    />
                </div>
                <Navbar isHomePage={floatingNav} />
                <section
                    className="section section--gradient main"
                    id="editor-note"
                    ref={bodyRef}
                    style={{
                        backgroundImage: `url(${
                            image.childImageSharp
                                ? image.childImageSharp.fluid.srcWebp
                                    ? image.childImageSharp.fluid.srcWebp
                                    : image.childImageSharp.fluid.src
                                : image
                        })`,
                        backgroundPosition: `top left`,
                        backgroundAttachment: `fixed`,
                        backgroundSize: `cover`
                    }}
                >
                    <div className="container">
                        <div className="section">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <div className="content">
                                        <div className="card editor-note">
                                            <header className="card-header">
                                                <h1 className="card-header-title">
                                                    {`Editor’s Note`}
                                                </h1>
                                            </header>
                                            <div className="card-content tile">
                                                <HTMLContent content={editorNote} />
                                            </div>
                                            {/* @ts-ignore Styled JSX*/}
                                            <style jsx>
                                                {`
                                                    .editor-note .tile {
                                                        justify-content: center;
                                                    }
                                                    .editor-note h1 {
                                                        font-weight: 700;
                                                    }
                                                `}
                                            </style>
                                        </div>
                                        <div className="divider-wrapper">
                                            <style jsx>
                                                {`
                                                    .divider-wrapper {
                                                        border-top: 1rem dotted black;
                                                        margin: 5vh auto;
                                                    }
                                                `}
                                            </style>
                                        </div>
                                        <div className="covid-guidelines-wrapper">
                                            <div
                                                className="card mobile-covid-guidelines"
                                                style={{ margin: '10vh auto' }}
                                            >
                                                <header className="card-header">
                                                    <h1 className="card-header-title">
                                                        {covidGuidelines.title}
                                                    </h1>
                                                </header>
                                                <div className="card-content">
                                                    <strong>
                                                        By {covidGuidelines.description}
                                                    </strong>
                                                    <p>{covidGuidelines.text.para}</p>
                                                    <ul>
                                                        {covidGuidelines.text.list.map(
                                                            (element, index) => {
                                                                return (
                                                                    <li key={index}>{element}</li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <TextBubble
                                            left={advice.left}
                                            right={advice.right}
                                            text={advice.text.slice(0, 2)}
                                        />
                                        <TextBubble
                                            left={advice.left}
                                            right={advice.right}
                                            text={advice.text.slice(2, 4)}
                                        />
                                        <div className="body-wrapper">
                                            <div className="doodle-wrapper">
                                                <Doodles doodles={doodles} />
                                            </div>
                                            <div className="article-wrapper">
                                                <ArticleBubbles articles={articles} />
                                            </div>

                                            {/* @ts-ignore Styled JSX*/}
                                            <style jsx>{`
                                                .article-wrapper {
                                                    z-index: 1;
                                                }
                                                .doodle-wrapper {
                                                    z-index: 0;
                                                }
                                                .body-wrapper {
                                                    display: grid;
                                                    grid-template: 1fr / 1fr;
                                                }

                                                .body-wrapper > * {
                                                    grid-column: 1 / 1;
                                                    grid-row: 1 / 1;
                                                }
                                            `}</style>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    cover: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    mainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    editorNote: PropTypes.object,
    advice: PropTypes.object,
    articles: PropTypes.object,
    doodles: PropTypes.object
};

const IndexPage = ({ data }: { data: RecursiveNonNullable<IndexPageTemplateQuery> }) => {
    const { markdownRemark: post } = data;
    return (
        <Layout isIndexPage={true}>
            <IndexPageTemplate
                image={post?.frontmatter?.image}
                cover={post?.frontmatter?.cover}
                mainImage={post?.frontmatter?.mainImage}
                title={post?.frontmatter?.title}
                heading={post?.frontmatter?.heading}
                subheading={post?.frontmatter?.subheading}
                editorNote={post?.html}
                advice={post?.frontmatter?.advice}
                articles={post?.frontmatter?.articles}
                doodles={post?.frontmatter?.doodles}
                covidGuidelines={post?.frontmatter?.covidGuidelines}
                video={post?.frontmatter?.video}
            />
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            html
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                cover {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                mainImage {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                video {
                    webm
                    mp4
                }
                heading
                subheading
                advice {
                    left {
                        childImageSharp {
                            fluid(maxWidth: 375, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    right {
                        childImageSharp {
                            fluid(maxWidth: 375, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    text
                }
                covidGuidelines {
                    title
                    description
                    text {
                        para
                        list
                    }
                }
                articles {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 375, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        title
                        subtitle
                        path
                    }
                }
                doodles {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 375, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`;
