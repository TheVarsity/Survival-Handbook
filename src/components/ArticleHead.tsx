import React from 'react';

type ArticleHeadProps = {
    title?: string | null;
    author?: { name: string; url: string };
    featuredImage?: { childImageSharp?: { fluid?: any } } | null;
};

const ArticleHead = ({ title, author, featuredImage }: ArticleHeadProps) => {
    // const { name, url } = author;
    const style = {
        backgroundImage: `url(${
            featuredImage?.childImageSharp ? featuredImage.childImageSharp.fluid.src : featuredImage
        })`,
        backgroundSize: `cover`
    };
    console.log(style, featuredImage);
    return (
        <div className="parallax-container full-width-image margin-top-0" id="home">
            <div className="video-wrapper">
                <div
                    className="video-overlay"
                    style={{
                        marginTop: 'auto',
                        display: 'flex',
                        height: '150px',
                        lineHeight: '1',
                        justifyContent: 'space-around',
                        alignItems: 'left',
                        flexDirection: 'column'
                        // textAlign: 'center'
                    }}
                >
                    <div className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                        <h3
                            className="has-text-weight-bold strike-large"
                            style={{
                                // boxShadow:
                                //     'rgb(255, 68, 0.6) 0.5rem 0px 0px, rgb(255, 68, 0.6) -0.5rem 0px 0px',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                // fontSize: '7rem',
                                color: 'white',
                                lineHeight: '1',
                                padding: '0.25em'
                                // textDecoration: 'line-through'
                            }}
                        >
                            {title}
                        </h3>
                    </div>
                    <div className=" is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
                        <p
                            className="strike-small"
                            style={{
                                // boxShadow:
                                //     'rgb(255, 68, 0.6) 0.5rem 0px 0px, rgb(255, 68, 0.6) -0.5rem 0px 0px',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',

                                // fontSize: '2rem',
                                // lineHeight: '1',
                                padding: '0.25em'
                            }}
                        >
                            <a
                                href={author?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="author-link"
                            >
                                {' '}
                                By {author?.name}
                            </a>
                        </p>
                    </div>
                </div>

                <picture className="video-cover" style={style} />
            </div>
            <style jsx>{`
                .author-link {
                    color: inherit;
                }
                .author-link:hover {
                    text-decoration: underline;
                }

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
                    padding-top: 50vh;
                    padding-left: 1em;
                    max-width: 80vw;
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
                .strike-large::before {
                     {
                        /* content: '';
                        border-bottom: 1rem dashed rgba(255, 68, 0, 0.8);
                        width: 100%;
                        position: absolute;
                        right: 0;
                        top: 50%; */
                    }
                }
                .strike-large::after {
                     {
                        /* content: '';
                        border-bottom: 1.5rem dashed yellow;
                        width: 100%;
                        position: absolute;
                        right: 0.8%;
                        top: 48%; */
                    }
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
                     {
                        /* content: '';
                        border-bottom: 0.4rem dashed rgba(255, 68, 0, 0.8);
                        width: 100%;
                        position: absolute;
                        right: 0;
                        top: 50%; */
                    }
                }
                .strike-small::after {
                     {
                        /* content: '';
                        border-bottom: 0.3rem dashed yellow;
                        width: 100%;
                        position: absolute;
                        right: 0.8%;
                        top: 50%; */
                    }
                }
            `}</style>
        </div>
    );
};

export default ArticleHead;