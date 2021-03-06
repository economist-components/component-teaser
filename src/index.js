import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Teaser({
  className,
  itemType = 'http://schema.org/Article',
  itemProp = 'article',
  children,
  publisher = 'The Economist',
  author = 'The Economist',
  classNameModifier = '',
}) {
  return (
    <article
      aria-label="Article Teaser"
      className={classNames(`teaser${ classNameModifier }`, className)}
      itemScope itemType={itemType} itemProp={itemProp}
      role="article"
    >
      <meta className="teaser__publisher" itemProp="publisher" content={publisher} />
      <meta className="teaser__author" itemProp="author" content={author} />
      {children}
    </article>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Teaser.propTypes = {
    publisher: PropTypes.string,
    author: PropTypes.string,
    className: PropTypes.string,
    classNameModifier: PropTypes.string,
    itemType: PropTypes.string,
    itemProp: PropTypes.string,
    children: PropTypes.node,
  };
}
