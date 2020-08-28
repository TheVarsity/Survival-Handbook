import React from 'react';

import Chevron from './chevron';
import scrollTo from 'gatsby-plugin-smoothscroll';

const VideoContainer = ({
    cover,
    webm,
    mp4
}: {
    cover?: { childImageSharp?: { fluid: any } };
    webm?: string;
    mp4?: string;
}) => {
    return (
        <div className="parallax-container full-width-image margin-top-0" id="home">
            <div className="video-wrapper">
                <div className="overlay" />

                <video
                    autoPlay
                    muted
                    loop
                    poster={`${cover?.childImageSharp ? cover.childImageSharp.fluid.src : cover}`}
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
    );
};

export default VideoContainer;
