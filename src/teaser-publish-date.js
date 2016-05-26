import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

export default function TeaserPublishDate({
  className,
  format = 'MMM Do YYYY, hh:mm:ss',
  dateTime,
  meta = false,
}) {
  dateTime = new Date(dateTime);
  const formatedDate = moment(dateTime).format(format);
  if (meta) {
    return (
      <meta
        content={dateTime}
        itemProp="datePublished dateModified"
        className="teaser__datetime teaser__datetime--meta"
      />
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
