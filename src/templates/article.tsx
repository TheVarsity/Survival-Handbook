import { BlogPostByIdQuery } from 'types/graphql-types';
import { graphql } from 'gatsby';
import ArticleHead from '../components/ArticleHead';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

import { isMobile } from 'react-device-detect';

import VideoContainer from '../components/home/VideoContainer';

import useScrollSpy from '../components/home/useScrollSpy';

// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
// import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

interface ArticlePostTemplateProps {
    content?: string | null;
    contentComponent?: React.FC<any>;
    description?: string | null;
    tags?: (string | null)[] | null;
    title?: string | null;
    helmet?: React.ReactNode | null;
    featured_image?: { childImageSharp?: { fluid?: any } } | null;
    featuredMobile?: { childImageSharp?: { fluid?: any } } | null;
    featuredVideo?: {
        webm?: string;
        mp4?: string;
        mobileWebm?: string;
        mobileMp4?: string;
    } | null;
    author?: { name: string; url: string };
}

export const ArticlePostTemplate: React.FC<ArticlePostTemplateProps> = ({
    content,
    contentComponent,
    title,
    helmet,
    featured_image,
    author,
    featuredMobile,
    featuredVideo
}) => {
    const PostContent = contentComponent || Content;

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
        <div>
            <div ref={parallaxRef}>
                {featuredVideo ? (
                    <ArticleHead
                        title={title}
                        author={author}
                        featuredImage={isMobile && featuredMobile ? featuredMobile : featured_image}
                        backgroundComponent={true}
                    >
                        <VideoContainer
                            webm={
                                featuredVideo.mobileWebm && isMobile
                                    ? featuredVideo.mobileWebm
                                    : featuredVideo.webm
                            }
                            mp4={
                                featuredVideo.mobileMp4 && isMobile
                                    ? featuredVideo.mobileMp4
                                    : featuredVideo.mp4
                            }
                            cover={featured_image}
                        />
                    </ArticleHead>
                ) : (
                    <ArticleHead
                        title={title}
                        author={author}
                        featuredImage={isMobile && featuredMobile ? featuredMobile : featured_image}
                    />
                )}
            </div>

            <Navbar isHomePage={floatingNav} />

            <section className="section" ref={bodyRef}>
                {helmet || ''}
                <div className="container content">
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
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
                featuredMobile={post?.frontmatter?.featuredMobile}
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
                    mobileWebm
                    mobileMp4
                }
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                featuredMobile {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
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
