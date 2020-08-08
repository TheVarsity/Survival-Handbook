import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { IndexPageTemplateQuery } from 'types/graphql-types';
import BlogRoll from '../components/BlogRoll';
import Features from '../components/Features';
import Layout from '../components/Layout';

import scrollTo from 'gatsby-plugin-smoothscroll';

const Chevron = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16">
        <path
            fill="white"
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
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro
}: IndexPageTemplateProps) => (
    <div>
        <div
            className="parallax-container full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${
                    image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`
            }}
        >
            <div
                style={{
                    marginTop: 'auto',
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'left',
                    flexDirection: 'column'
                }}
            >
                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        boxShadow:
                            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                        backgroundColor: 'rgb(255, 68, 0)',
                        color: 'white',
                        lineHeight: '1',
                        padding: '0.25em'
                    }}
                >
                    {title}
                </h1>
                <h3
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                    style={{
                        boxShadow:
                            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                        backgroundColor: 'rgb(255, 68, 0)',
                        color: 'white',
                        lineHeight: '1',
                        padding: '0.25em'
                    }}
                >
                    {subheading}
                </h3>
            </div>
            <div className="chevron-down is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
                <a onClick={() => scrollTo('#editor-note')} className="icon">
                    <Chevron />
                </a>
            </div>
            {/* @ts-ignore Styled JSX */}
            <style jsx>
                {`
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
                `}
            </style>
        </div>

        <section className="section section--gradient" id="editor-note">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h1 className="title">{mainpitch.title}</h1>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">{mainpitch.description}</h3>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2">
                                            {heading}
                                        </h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs} />
                                <div className="columns">
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/products">
                                            See all products
                                        </Link>
                                    </div>
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
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array
    })
};

const IndexPage = ({ data }: { data: RecursiveNonNullable<IndexPageTemplateQuery> }) => {
    const { markdownRemark: post } = data;
    return (
        <Layout isIndexPage={true}>
            <IndexPageTemplate
                image={post?.frontmatter?.image}
                title={post?.frontmatter?.title}
                heading={post?.frontmatter?.heading}
                subheading={post?.frontmatter?.subheading}
                mainpitch={post?.frontmatter?.mainpitch}
                description={post?.frontmatter?.description}
                intro={post?.frontmatter?.intro}
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
                heading
                subheading
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
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
