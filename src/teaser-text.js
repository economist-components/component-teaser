import React from 'react';
import classNames from 'classnames';

export default function TeaserText({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="description" content={children} className="teaser__text teaser__text--meta" />
    );
  }
  return (
    <div
      className={classNames('teaser__text', className)}
      itemProp="description"
    >
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  TeaserText.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    meta: React.PropTypes.bool,
  };
}
