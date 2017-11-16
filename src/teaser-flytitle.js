import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function TeaserFlyTitle({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="alternativeHeadline" content={children} className="teaser__flytitle teaser__flytitle--meta" />
    );
  }
  return (
    <div
      className={classNames('teaser__flytitle', className)}
      itemProp="alternativeHeadline"
    >
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  TeaserFlyTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    meta: PropTypes.bool,
  };
}
