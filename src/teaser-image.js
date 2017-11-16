import React from 'react';
import PropTypes from 'prop-types';
import Picture from '@economist/component-picture';
import classNames from 'classnames';

export default function TeaserImage({
  className,
  sources,
  alt,
}) {
  return (
    <Picture
      sources={sources}
      className={classNames('teaser__image', className)}
      alt={alt}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  TeaserImage.propTypes = {
    className: PropTypes.string,
    sources: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
    alt: PropTypes.string,
  };
}
