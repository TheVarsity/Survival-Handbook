import React from 'react';

import Chevron from './chevron';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { isMobile } from 'react-device-detect';

const VideoContainer = ({
    cover,
    webm,
    mp4,
    image,
    chevron = false
}: {
    cover?: { childImageSharp?: { fluid: any } };
    webm?: string;
    mp4?: string;
    image?: { childImageSharp?: { fluid: any } };
    chevron: boolean;
}) => {
    console.log('Video Container', cover);
    return (
        <div className="parallax-container full-width-image margin-top-0" id="home">
            <div className="video-wrapper">
                <div className="video-overlay is-size-5-mobile is-size-5-tablet is-size-4-widescreen" />

                <video
                    autoPlay
                    muted
                    loop
                    poster={`${
                        cover?.childImageSharp
                            ? cover.childImageSharp.fluid.base64
                            : cover.childImageSharp.fluid.base64
                            ? cover.childImageSharp.fluid.srcSetWebp
                                ? cover.childImageSharp.fluid.srcSetWebp
                                : cover.childImageSharp.fluid.srcSet
                            : cover
                    }`}
                    className="video-cover"
                >
                    <source src={webm} type="video/webm" />
                    <source src={mp4} type="video/mp4" />
                </video>

                <div className="video-overlay">
                    <div className="overlay-container">
                        <div className="image-wrapper">
                            {image ? (
                                <Img
                                    imgStyle={{
                                        objectFit: 'contain',
                                        transform: isMobile ? 'scale(1.5)' : ''
                                    }}
                                    style={{ position: 'unset !important', objectFit: 'contain' }}
                                    fluid={{
                                        ...image?.childImageSharp?.fluid,
                                        sizes: '200vw'
                                    }}
                                />
                            ) : null}
                        </div>
                        <div className="chevron-down is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
                            {chevron ? (
                                <a onClick={() => scrollTo('#editor-note')} className="icon">
                                    <Chevron />
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            {/* @ts-ignore Styled JSX */}
            <style jsx>
                {`
                    .image-wrapper {
                        height: 70vh;
                    }

                    .overlay-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
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
                        margin-top: 10vh;
                        z-index: 10;
                    }
                `}
            </style>
        </div>
    );
};

export default VideoContainer;
