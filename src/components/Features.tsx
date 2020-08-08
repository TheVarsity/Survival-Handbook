import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import PropTypes from 'prop-types';
import React from 'react';

const FeatureGrid = ({ gridItems }) => (
    <div className="columns is-multiline">
        {gridItems.map(item => (
            <div key={item.text} className="column is-6">
                <section className="section">
                    <div className="has-text-centered">
                        <div
                            style={{
                                width: '240px',
                                display: 'inline-block'
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={item} />
                        </div>
                    </div>
                    <p>{item.text}</p>
                </section>
            </div>
        ))}
    </div>
);

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string
        })
    )
};

export default FeatureGrid;
