import { MarkdownRemark } from 'types/graphql-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import React from 'react';

interface AboutPageTemplateProps {
    title?: string | null;
    content?: string | null;
    contentComponent?: React.FC<any>;
}

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
    title,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent className="content" content={content} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface AboutPageProps {
    data: {
        markdownRemark: MarkdownRemark;
    };
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter?.title}
                content={post.html}
            />
        </Layout>
    );
};

export default AboutPage;

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
