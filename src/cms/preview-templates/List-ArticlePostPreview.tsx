import { ListArticlePostTemplate } from '../../templates/list-article';
import PropTypes from 'prop-types';
import React from 'react';

const ListArticlePostPreview = ({ entry, widgetFor }) => (
    <ListArticlePostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
    />
);

ListArticlePostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default ListArticlePostPreview;
