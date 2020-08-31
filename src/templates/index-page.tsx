/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { IndexPageTemplateQuery } from 'types/graphql-types';
import ArticleBubbles from '../components/home/articleBubbles';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

import ArticleHead from '../components/ArticleHead';
import Doodles from '../components/home/doodles';
import TextBubble from '../components/home/TextBubble';
import VideoContainer from '../components/home/VideoContainer';

import useScrollSpy from '../components/home/useScrollSpy';

//@ts-ignore
import mp4 from '../img/coverBg.mp4';
//@ts-ignore
import webm from '../img/coverBg.webm';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

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
    doodles
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
                        mp4={mp4}
                        webm={webm}
                        chevron={true}
                        cover={cover}
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
                                        <div className="editor-note">
                                            <div className="tile">
                                                <h1 className="title">{editorNote.title}</h1>
                                            </div>
                                            <div className="tile">
                                                <h3 className="subtitle">
                                                    {editorNote.description}
                                                </h3>
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
                                        <div className="column is-6 is-offset-3">
                                            <PreviewCompatibleImage imageInfo={mainImage} />
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
                editorNote={post?.frontmatter?.editorNote}
                advice={post?.frontmatter?.advice}
                articles={post?.frontmatter?.articles}
                doodles={post?.frontmatter?.doodles}
            />
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
                heading
                subheading
                editorNote {
                    title
                    description
                }
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
