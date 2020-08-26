import { BlogPostByIdQuery } from 'types/graphql-types';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import ArticleHead from '../components/ArticleHead';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
// import PropTypes from 'prop-types';
import React from 'react';

interface ArticlePostTemplateProps {
    content?: string | null;
    contentComponent?: React.FC<any>;
    description?: string | null;
    tags?: (string | null)[] | null;
    title?: string | null;
    helmet?: React.ReactNode | null;
    featured_image?: { childImageSharp?: { fluid?: any } } | null;
    author?: { name: string; url: string };
}

export const ArticlePostTemplate: React.FC<ArticlePostTemplateProps> = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    featured_image,
    author
}) => {
    const PostContent = contentComponent || Content;
    const style = {
        backgroundImage: `url(${
            featured_image?.childImageSharp
                ? featured_image.childImageSharp.fluid.src
                : featured_image
        })`,
        backgroundSize: `cover`
    };
    console.log(style);
    return (
        <div>
            <ArticleHead title={title} author={author} featuredImage={featured_image} />

            <Navbar isHomePage={true} />

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

const ArticlePost: React.FC<{
    data: BlogPostByIdQuery;
}> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout isIndexPage={true}>
            <ArticlePostTemplate
                content={post?.html}
                contentComponent={HTMLContent}
                description={post?.frontmatter?.description}
                featured_image={post?.frontmatter?.featuredimage}
                author={post?.frontmatter?.author}
                helmet={
                    <Helmet titleTemplate="%s | Article">
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

export default ArticlePost;

export const pageQuery = graphql`
    query ArticlePostByID($id: String!) {
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
                author {
                    name
                    url
                }
                tags
            }
        }
    }
`;
