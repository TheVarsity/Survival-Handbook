/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { IndexPageTemplateQuery } from 'types/graphql-types';
import ArticleBubbles from '../components/home/articleBubbles';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import Chevron from '../components/home/chevron';
import Doodles from '../components/home/doodles';
import TextBubble from '../components/home/TextBubble';

//@ts-ignore
import mp4 from '../img/handbook-cover-2020.mp4';
//@ts-ignore
import webm from '../img/handbook-cover-2020.webm';

import scrollTo from 'gatsby-plugin-smoothscroll';

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
    // React.useEffect(() => {
    //     console.log('Doodles', doodles);
    // }, []);

    return (
        <>
            <div>
                <div className="parallax-container full-width-image margin-top-0" id="home">
                    <div className="video-wrapper">
                        <div className="overlay" />

                        <video
                            autoPlay
                            muted
                            loop
                            poster={`${
                                cover.childImageSharp ? cover.childImageSharp.fluid.src : cover
                            }`}
                            className="video-cover"
                        >
                            <source src={webm} type="video/webm" />
                            <source src={mp4} type="video/mp4" />
                        </video>
                        <div className="video-overlay chevron-down is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
                            <a onClick={() => scrollTo('#editor-note')} className="icon">
                                <Chevron />
                            </a>
                        </div>
                    </div>
                    {/* @ts-ignore Styled JSX */}
                    <style jsx>
                        {`
                            .video-wrapper {
                                position: relative;
                                background-color: black;
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                            }
                            .video-overlay {
                                z-index: 1;
                                position: relative;
                                padding-top: 85vh;
                            }

                            .video-cover {
                                object-fit: cover;
                                position: absolute;
                                width: 100%;
                                left: 0;
                                top: 0;
                                height: 100%;
                                z-index: 0;
                            }
                            .icon {
                                width: 7rem !important;
                                height: 7rem !important;
                            }
                            .parallax-container {
                                display: flex;
                                flex-direction: column;
                                flex-flow: column nowrap;
                            }
                            .chevron-down {
                                display: flex;
                                justify-content: center;
                                margin-top: auto;
                                 {
                                    /* padding-top: 10%; */
                                }
                            }
                            .strike-large::before {
                                content: '';
                                border-bottom: 1rem dashed rgba(255, 68, 0, 0.8);
                                width: 100%;
                                position: absolute;
                                right: 0;
                                top: 50%;
                            }
                            .strike-large::after {
                                content: '';
                                border-bottom: 1.5rem dashed black;
                                width: 100%;
                                position: absolute;
                                right: 0.8%;
                                top: 48%;
                            }

                            .strike-large {
                                position: relative;
                                display: inline-block;
                            }
                            .strike-small {
                                position: relative;
                                display: inline-block;
                            }
                            .strike-small::before {
                                content: '';
                                border-bottom: 0.4rem dashed rgba(255, 68, 0, 0.8);
                                width: 100%;
                                position: absolute;
                                right: 0;
                                top: 50%;
                            }
                            .strike-small::after {
                                content: '';
                                border-bottom: 0.3rem dashed black;
                                width: 100%;
                                position: absolute;
                                right: 0.8%;
                                top: 50%;
                            }
                        `}
                    </style>
                </div>
                <Navbar isHomePage={true} />
                <section
                    className="section section--gradient main"
                    id="editor-note"
                    style={{
                        backgroundImage: `url(${
                            image.childImageSharp ? image.childImageSharp.fluid.src : image
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
                                        <TextBubble left={advice.left} right={advice.right} />
                                        <TextBubble left={advice.left} right={advice.right} />
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
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                cover {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                mainImage {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
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
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    right {
                        childImageSharp {
                            fluid(maxWidth: 375, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }

                articles {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 375, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                doodles {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 375, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
