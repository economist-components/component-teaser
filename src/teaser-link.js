import React from 'react';
import classNames from 'classnames';

export default function TeaserLink({
  className,
  children,
  href,
  meta = false,
}) {
  if (meta) {
    return (
      <div className={classNames('teaser__wrapper', className)}>
        <link href={href} itemProp="url" className="teaser__link teaser__link--meta" />
        {children}
      </div>
    );
  }
  return (
    <a
      href={href}
      itemProp="url"
      className={classNames('teaser__link', className)}
    >
      {children}
    </a>
  );
}

if (process.env.NODE_ENV !== 'production') {
  TeaserLink.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    href: React.PropTypes.string,
    meta: React.PropTypes.bool,
  };
}
