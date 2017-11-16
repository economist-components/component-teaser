import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TeaserTitle({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="headline" content={children} className="teaser__title teaser__title--meta" />
    );
  }
  return (
    <div
      className={classNames('teaser__title', className)}
      itemProp="headline"
    >
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  TeaserTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    meta: PropTypes.bool,
  };
}
