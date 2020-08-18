import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { IndexPageTemplateQuery } from 'types/graphql-types';
import BlogRoll from '../components/BlogRoll';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import TextBubble from '../components/TextBubble';

//@ts-ignore
import mp4 from '../img/handbook-cover-2020.mp4';
//@ts-ignore
import webm from '../img/handbook-cover-2020.webm';

import scrollTo from 'gatsby-plugin-smoothscroll';

const Chevron = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16">
        <path
            fill="black"
            d="M4.14645,5.64645 C4.34171,5.45118 4.65829,5.45118 4.85355,5.64645 L7.9999975,8.79289 L11.1464,5.64645 C11.3417,5.45118 11.6583,5.45118 11.8536,5.64645 C12.0488,5.84171 12.0488,6.15829 11.8536,6.35355 L8.35355,9.85355 C8.15829,10.0488 7.84171,10.0488 7.64645,9.85355 L4.14645,6.35355 C3.95118,6.15829 3.95118,5.84171 4.14645,5.64645 Z"
        />
        {/*  @ts-ignore Styled JSX */}
        <style jsx>
            {`
                svg {
                    height: 100%;
                    width: 100%;
                }
            `}
        </style>
    </svg>
);

type IndexPageTemplateProps = RecursiveNonNullable<
    IndexPageTemplateQuery
>['markdownRemark']['frontmatter'];

export const IndexPageTemplate = ({
    image,
    cover,
    editorNote,
    advice,
    articles,
    doodles
}: IndexPageTemplateProps) => (
    <>
        <div>
            <div
                className="parallax-container full-width-image margin-top-0"
                // style={{
                //     backgroundImage: `url(${
                //         image.childImageSharp ? image.childImageSharp.fluid.src : image
                //     })`,
                //     backgroundPosition: `top left`,
                //     backgroundAttachment: `fixed`
                // }}
            >
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
            <Navbar />
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
                                    <div
                                        className="fixedchevron columns"
                                        onClick={() => window.scrollTo(0, 0)}
                                        style={{
                                            position: 'fixed',
                                            bottom: '0px',
                                            right: '10px',
                                            cursor: 'pointer',
                                            transform: 'rotate(180deg)'
                                        }}
                                    >
                                        <Chevron />
                                    </div>
                                    <div className="editor-note">
                                        <div className="tile">
                                            <h1 className="title">{editorNote.title}</h1>
                                        </div>
                                        <div className="tile">
                                            <h3 className="subtitle">{editorNote.description}</h3>
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
                                    <TextBubble left={advice.left} right={advice.right} />
                                    <TextBubble left={advice.left} right={advice.right} />

                                    <div className="article-wrapper">
                                        <div className="columns">
                                            <div className="column is-5 is-offset-3">
                                                <div
                                                    style={{
                                                        width: '100%',
                                                        display: 'inline-block'
                                                    }}
                                                >
                                                    <PreviewCompatibleImage
                                                        imageInfo={articles.blurbs[0]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-4 is-offset-7">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[1]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-4 is-offset-2">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[2]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-5 is-offset-6">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[3]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-4 is-offset-1">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[4]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-6 is-offset-5">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[5]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-5 is-offset-3">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[6]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-4">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[7]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-5 is-offset-8">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[8]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-5 is-offset-2">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[9]}
                                                />
                                            </div>
                                        </div>
                                        <div className="column is-5 is-offset-6">
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={articles.blurbs[8]}
                                                />
                                            </div>
                                        </div>

                                        {/* @ts-ignore Styled JSX*/}
                                        <style jsx>{`
                                            .article-wrapper {
                                                z-index: 1;
                                            }
                                        `}</style>
                                    </div>

                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2">
                                            Latest stories
                                        </h3>
                                        <BlogRoll />
                                        <div className="column is-12 has-text-centered">
                                            <Link className="btn" to="/blog">
                                                Read more
                                            </Link>
                                        </div>
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

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    cover: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    editorNote: PropTypes.object,
    advice: PropTypes.object,
    articles: PropTypes.object
};

const IndexPage = ({ data }: { data: RecursiveNonNullable<IndexPageTemplateQuery> }) => {
    const { markdownRemark: post } = data;
    return (
        <Layout isIndexPage={true}>
            <IndexPageTemplate
                image={post?.frontmatter?.image}
                cover={post?.frontmatter?.cover}
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
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
`;
