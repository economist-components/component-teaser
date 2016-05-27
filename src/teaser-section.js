import React from 'react';
import classNames from 'classnames';

export default function TeaserSection({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="articleSection" content={children} className="teaser__section teaser__section--meta" />
    );
  }
  return (
    <div
      className={classNames('teaser__section', className)}
      itemProp="articleSection"
    >
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  TeaserSection.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    meta: React.PropTypes.bool,
  };
}
