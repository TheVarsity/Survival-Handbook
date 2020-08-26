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
import React, { useReducer, useState } from 'react';

import Fade from 'react-reveal/Fade';

import TransitionGroup from 'react-transition-group/TransitionGroup';

const ReloadSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="7rem">
            <path
                fill="#5596ff"
                d="M12.5,21A7.5,7.5,0,0,1,6.713,8.729a.5.5,0,1,1,.771.637A6.5,6.5,0,1,0,12.5,7h-3a.5.5,0,0,1,0-1h3a7.5,7.5,0,0,1,0,15Z"
            />
            <path
                fill="#5596ff"
                d="M11.5,9a.5.5,0,0,1-.354-.146l-2-2a.5.5,0,0,1,.708-.708l2,2A.5.5,0,0,1,11.5,9Z"
            />
            <path
                fill="#5596ff"
                d="M9.5,7a.5.5,0,0,1-.354-.854l2-2a.5.5,0,0,1,.708.708l-2,2A.5.5,0,0,1,9.5,7Z"
            />
        </svg>
    );
};

interface ListArticlePostTemplateProps {
    content?: string | null;
    contentComponent?: React.FC<any>;
    description?: string | null;
    tags?: (string | null)[] | null;
    title?: string | null;
    helmet?: React.ReactNode | null;
    featured_image?: { childImageSharp?: { fluid?: any } } | null;
    author?: { name: string; url: string };
    list?: ({ title: string; text: string } | null)[] | null;
}

const fadePropReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'remove-cascade': {
            if (action.curIndex == action.lastIndex) {
                return { ...state, cascade: false };
            }
            return state;
        }
        default: {
            return state;
        }
    }
};

export const ListArticlePostTemplate: React.FC<ListArticlePostTemplateProps> = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    featured_image,
    author,
    list
}) => {
    const PostContent = contentComponent || Content;

    const [stateList, setStateList] = useState(list);

    const [propsState, fadeDispatch] = useReducer(fadePropReducer, {
        collapse: true,
        bottom: true,
        cascade: true
    });

    return (
        <div>
            <ArticleHead title={title} author={author} featuredImage={featured_image} />
            <Navbar isHomePage={true} />

            <section className="section">
                {helmet || ''}
                <div className="container content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            {list && stateList && list.length ? (
                                <div className="todo-wrapper">
                                    <h3 className="has-text-centered">
                                        {list.name ? list.name : 'Listicle'}
                                    </h3>
                                    {stateList.length ? null : (
                                        <div className="finished">
                                            <h4 className="has-text-centered">
                                                Hey, {`you've`} completed all the steps!
                                            </h4>
                                            <span>
                                                <a
                                                    onClick={() => {
                                                        setStateList(list);
                                                    }}
                                                >
                                                    <ReloadSvg />
                                                </a>
                                            </span>
                                        </div>
                                    )}
                                    <div className="todos">
                                        <TransitionGroup in={stateList} appear exit timeout={300}>
                                            {stateList.map((item, index) => {
                                                console.log('Triggered');
                                                if (propsState.cascade) {
                                                    fadeDispatch({
                                                        type: 'remove-cascade',
                                                        curIndex: index,
                                                        lastIndex: list.length - 1
                                                    });
                                                }
                                                return (
                                                    <Fade key={index} {...propsState}>
                                                        <div className="card todo-item">
                                                            <header className="card-header">
                                                                <div className="checkbox-wrapper">
                                                                    <div className="title-container">
                                                                        <p className="item-title card-header-title">
                                                                            {item.title}
                                                                        </p>
                                                                    </div>
                                                                    <button
                                                                        data-id={index}
                                                                        onClick={() => {
                                                                            setStateList(
                                                                                stateList.filter(
                                                                                    (item, i) =>
                                                                                        i !== index
                                                                                )
                                                                            );
                                                                        }}
                                                                        type="button"
                                                                        className="close"
                                                                        aria-label="Close"
                                                                    >
                                                                        <span aria-hidden="true">
                                                                            &times;
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </header>
                                                            <div className="card-content">
                                                                <div className="content">
                                                                    {item.text}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                );
                                            })}
                                        </TransitionGroup>
                                    </div>
                                    <style jsx>
                                        {`
                                            .finished {
                                                display: flex;
                                                flex-direction: column;
                                                align-items: center;
                                            }
                                            .title-container {
                                                width: 98%;
                                            }
                                            .item-title {
                                                margin-bottom: 0 !important;
                                            }
                                            .todos {
                                                display: flex;
                                                flex-direction: column;
                                            }
                                            .todos > div {
                                                padding-top: 5vh;
                                            }
                                            .checkbox-wrapper {
                                                padding-left: 1em;
                                                display: flex;
                                                align-items: center;
                                                width: 100%;
                                            }
                                            .close {
                                                font-size: 2rem;
                                                font-weight: 600;
                                                line-height: 1;
                                                color: #000;
                                                text-shadow: 0 1px 0 #fff;
                                                background-color: transparent;
                                                border: 0;
                                                align-self: center;
                                                 {
                                                    /* align-items: center;
                                                align-self: flex-end;
                                                -webkit-appearance: none; */
                                                }
                                            }
                                        `}
                                    </style>
                                </div>
                            ) : null}
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

const ListArticlePost: React.FC<{
    data: BlogPostByIdQuery;
}> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout isIndexPage={true}>
            <ListArticlePostTemplate
                content={post?.html}
                contentComponent={HTMLContent}
                description={post?.frontmatter?.description}
                featured_image={post?.frontmatter?.featuredimage}
                author={post?.frontmatter?.author}
                helmet={
                    <Helmet titleTemplate="%s | ListArticle">
                        <title>{`${post?.frontmatter?.title}`}</title>
                        <meta name="description" content={`${post?.frontmatter?.description}`} />
                    </Helmet>
                }
                tags={post?.frontmatter?.tags}
                list={post?.frontmatter?.list}
                title={post?.frontmatter?.title}
            />
        </Layout>
    );
};

export default ListArticlePost;

export const pageQuery = graphql`
    query ListArticlePostByID($id: String!) {
        markdownRemark(id: { eq: $id }, frontmatter: { templateKey: { eq: "list-article" } }) {
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
                list {
                    title
                    text
                }
                tags
            }
        }
    }
`;
