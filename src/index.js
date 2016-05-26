import React from 'react';
import classNames from 'classnames';
import TeaserImage from './teaser-image';
import TeaserLink from './teaser-link';
import TeaserPublishDate from './teaser-publish-date';
import TeaserTitle from './teaser-title';

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
      <meta className="teaser__publisher" itemProp="publisher author" content={publisher} />
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
