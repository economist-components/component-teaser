import React from 'react';
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
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    meta: React.PropTypes.bool,
  };
}
