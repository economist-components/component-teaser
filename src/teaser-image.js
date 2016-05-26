import React from 'react';
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
    className: React.PropTypes.string,
    sources: React.PropTypes.arrayOf(
      React.PropTypes.object,
    ).isRequired,
    alt: React.PropTypes.string,
  };
}
