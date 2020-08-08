import { AboutPageTemplate } from '../../templates/about-page';
import PropTypes from 'prop-types';
import React from 'react';

const AboutPagePreview = ({ entry, widgetFor }) => (
    <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

AboutPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default AboutPagePreview;
