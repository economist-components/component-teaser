import React from 'react';
import Picture from '@economist/component-picture';
import classNames from 'classnames';
import moment from 'moment';

export function TeaserImage({
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

export function TeaserSection({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="articleSection" content={children} />
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

export function TeaserFlyTitle({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="alternativeHeadline" content={children} />
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
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    meta: React.PropTypes.bool,
  };
}

export function TeaserTitle({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="headline" content={children} />
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

export function TeaserText({
  className,
  children,
  meta = false,
}) {
  if (meta) {
    return (
      <meta itemProp="description" content={children} />
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

export function TeaserLink({
  className,
  children,
  href,
  meta = false,
}) {
  if (meta) {
    return (
      <div className={classNames('teaser__wrapper', className)}>
        <link href={href} itemProp="url" />
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

export function TeaserPublishDate({
  className,
  format = 'MMM Do YYYY, hh:mm:ss',
  dateTime,
  meta = false,
}) {
  dateTime = new Date(dateTime);
  const formatedDate = moment(dateTime).format(format);
  if (meta) {
    return (
      <meta content={dateTime} itemProp="datePublished dateModified" />
    );
  }
  return (
    <time
      className={classNames('teaser__datetime', className)}
      itemProp="datePublished dateModified"
      dateTime={dateTime}
    >
      {formatedDate}
    </time>
  );
}

if (process.env.NODE_ENV !== 'production') {
  TeaserPublishDate.propTypes = {
    className: React.PropTypes.string,
    dateTime(props, propName, componentName) {
      if (Number.isNaN(new Date(props[propName]))) {
        return new Error(`Invalid prop ${ propName } supplied to ${ componentName
          }. Expected Date got ${ typeof props[propName] }`);
      }
      return null;
    },
    format: React.PropTypes.string,
    meta: React.PropTypes.bool,
  };
}

export default function Teaser({
  className,
  itemType = 'http://schema.org/Article',
  itemProp = 'article',
  children,
  publisher = 'Economist',
}) {
  return (
    <article
      className={classNames('teaser', className)}
      itemScope itemType={itemType} itemProp={itemProp}
      role="article"
    >
      <meta itemProp="publisher author" content={publisher} />
      {children}
    </article>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Teaser.propTypes = {
    publisher: React.PropTypes.string,
    className: React.PropTypes.string,
    itemType: React.PropTypes.string,
    itemProp: React.PropTypes.string,
    children: (props, propName, componentName) => {
      // not required: TeaserLink, TeaserText, TeaserFlyTitle, TeaserSection
      // required: TeaserImage, TeaserTitle, TeaserPublishDate
      let children = [];
      if (props.children) {
        if (Array.isArray(props.children)) {
          let teaserLinkExists = false;
          props.children.forEach((child, index) => {
            if (child.type === TeaserLink) {
              teaserLinkExists = true;
              children = props.children[index].props.children;
            }
          });

          if (teaserLinkExists === false) {
            children = props.children;
          }
        } else {
          children = props.children.props.children;
        }
      }

      let teaserImageExists = false;
      let teaserPublishDateExists = false;
      let teaserTitleExists = false;
      children.forEach((child) => {
        teaserImageExists = teaserImageExists || child.type === TeaserImage;
        teaserPublishDateExists = teaserPublishDateExists || child.type === TeaserPublishDate;
        teaserTitleExists = teaserTitleExists || child.type === TeaserTitle;
      });

      if (teaserImageExists === false) {
        return new Error(`Invalid component TeaserImage not specified in
          ${ propName } for ${ componentName }.`);
      } else if (teaserPublishDateExists === false) {
        return new Error(`Invalid component TeaserPublishDate not specified in
          ${ propName } for ${ componentName }.`);
      } else if (teaserTitleExists === false) {
        return new Error(`Invalid component TeaserTitle not specified in
          ${ propName } for ${ componentName }.`);
      }

      return null;
    },
  };
}
