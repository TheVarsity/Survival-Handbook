import { BlogPostByIdQuery } from 'types/graphql-types';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import PropTypes from 'prop-types';
import React from 'react';

interface BlogPostTemplateProps {
    content?: string | null;
    contentComponent?: React.FC<any>;
    description?: string | null;
    tags?: (string | null)[] | null;
    title?: string | null;
    helmet?: React.ReactNode | null;
    featured_image?: object | null;
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    featured_image
}) => {
    const PostContent = contentComponent || Content;

    return (
        <div>
            <div className="parallax-container full-width-image margin-top-0" id="home">
                <div
                    style={{
                        width: '100%',
                        display: 'inline-block',
                        height: '100vh'
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${
                                featured_image.childImageSharp
                                    ? featured_image.childImageSharp.fluid.src
                                    : featured_image
                            })`,
                            backgroundPosition: `center`,
                            backgroundAttachment: `fixed`,
                            backgroundSize: `cover`
                        }}
                    >
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <section className="section">
                {helmet || ''}
                <div className="container content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <PostContent content={content} />
                            {tags && tags.length ? (
                                <div style={{ marginTop: `4rem` }}>
                                    <h4>Tags</h4>
                                    <ul className="taglist">
                                        {tags.map(
                                            tag =>
                                                tag && (
                                                    <li key={`tag${tag}`}>
                                                        <Link to={`/tags/${kebabCase(tag)}/`}>
                                                            {tag}
                                                        </Link>
                                                    </li>
                                                )
                                        )}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const BlogPost: React.FC<{
    data: BlogPostByIdQuery;
}> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <BlogPostTemplate
                content={post?.html}
                contentComponent={HTMLContent}
                description={post?.frontmatter?.description}
                featured_image={post?.frontmatter?.featuredimage}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post?.frontmatter?.title}`}</title>
                        <meta name="description" content={`${post?.frontmatter?.description}`} />
                    </Helmet>
                }
                tags={post?.frontmatter?.tags}
                title={post?.frontmatter?.title}
            />
        </Layout>
    );
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                description
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                tags
            }
        }
    }
`;
