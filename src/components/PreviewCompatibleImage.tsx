import Img from 'gatsby-image';
import React from 'react';

type PreviewCompatibleImageProps = {
    imageInfo: {
        alt?: string;
        childImageSharp?: { fluid: any };
        image?: string | { childImageSharp?: { fluid?: any } };
        style?: object;
    };
};

const PreviewCompatibleImage = ({ imageInfo }: PreviewCompatibleImageProps) => {
    const imageStyle = { borderRadius: '5px' };
    const { alt = '', childImageSharp, image } = imageInfo;

    // console.log(image);

    if (image && image.childImageSharp) {
        return <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />;
    }

    if (childImageSharp) {
        return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
    }

    if (!!image && typeof image === 'string')
        return <img style={imageStyle} src={image} alt={alt} />;

    return null;
};

export default PreviewCompatibleImage;
