import { BlogPostByIdQuery } from 'types/graphql-types';
import { graphql } from 'gatsby';
import ArticleHead from '../components/ArticleHead';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
// import PropTypes from 'prop-types';
import useScrollSpy from '../components/home/useScrollSpy';

import React, { useEffect, useReducer, useRef, useState } from 'react';

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
                <ArticleHead title={title} author={author} featuredImage={featured_image} />
            </div>
            <Navbar isHomePage={floatingNav} />

            <section className="section" ref={bodyRef}>
                {helmet || ''}
                <div className="container content">
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <div className="unordered-list-wrapper">
                                <PostContent content={content} />
                            </div>
                            {list && stateList && list.length ? (
                                <div className="todo-wrapper">
                                    <h3 className="has-text-centered">
                                        {list.name ? list.name : ''}
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
                                            }
                                        `}
                                    </style>
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
                featured_image={post?.frontmatter?.featuredimage}
                author={post?.frontmatter?.author}
                helmet={
                    <Helmet titleTemplate="%s | ListArticle">
                        <title>{`${post?.frontmatter?.title}`}</title>
                        <meta name="description" content={`${post?.frontmatter?.description}`} />
                    </Helmet>
                }
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
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
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
            }
        }
    }
`;
