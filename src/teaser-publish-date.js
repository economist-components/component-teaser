import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment-timezone';

export default function TeaserPublishDate({
  className,
  format = 'MMM Do YYYY, hh:mm:ss',
  dateTime,
  meta = false,
}) {
  dateTime = new Date(dateTime);
  const formatedDate = moment(dateTime).tz('Europe/London').format(format);
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
    className: PropTypes.string,
    dateTime(props, propName, componentName) {
      if (Number.isNaN(new Date(props[propName]))) {
        return new Error(`Invalid prop ${ propName } supplied to ${ componentName
          }. Expected Date got ${ typeof props[propName] }`);
      }
      return null;
    },
    format: PropTypes.string,
    meta: PropTypes.bool,
  };
}
