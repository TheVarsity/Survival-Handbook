import { BlogPostByIdQuery } from 'types/graphql-types';
import { graphql } from 'gatsby';
import ArticleHead from '../components/ArticleHead';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

import VideoContainer from '../components/home/VideoContainer';

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
    featuredVideo?: { webm?: string; mp4?: string } | null;
    author?: { name: string; url: string };
}

export const ArticlePostTemplate: React.FC<ArticlePostTemplateProps> = ({
    content,
    contentComponent,
    title,
    helmet,
    featured_image,
    author,
    featuredVideo
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
            {featuredVideo ? (
                <ArticleHead
                    title={title}
                    author={author}
                    featuredImage={featured_image}
                    backgroundComponent={true}
                >
                    <VideoContainer
                        webm={featuredVideo.webm}
                        mp4={featuredVideo.mp4}
                        cover={featured_image}
                    />
                </ArticleHead>
            ) : (
                <ArticleHead title={title} author={author} featuredImage={featured_image} />
            )}

            <Navbar isHomePage={true} />

            <section className="section">
                {helmet || ''}
                <div className="container content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <PostContent content={content} />
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
                featured_image={post?.frontmatter?.featuredimage}
                featuredVideo={post?.frontmatter?.featuredVideo}
                author={post?.frontmatter?.author}
                helmet={
                    <Helmet titleTemplate="%s | Article">
                        <title>{`${post?.frontmatter?.title}`}</title>
                        <meta name="description" content={`${post?.frontmatter?.description}`} />
                    </Helmet>
                }
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
                featuredVideo {
                    webm
                    mp4
                }
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
            }
        }
    }
`;
