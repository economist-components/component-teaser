import React from 'react';
import Teaser, {
  TeaserImage,
  TeaserSection,
  TeaserFlyTitle,
  TeaserTitle,
  TeaserText,
  TeaserLink,
  TeaserPublishDate,
} from './';

// const enableMeta = true;
export default (
  <Teaser>
    <TeaserLink href="http://www.someurl.com">
      <TeaserImage
        sources={[
          { url: 'https://placehold.it/480x270', width: 240, height: 135, dppx: 2 },
          { url: 'https://placehold.it/240x135', width: 240, height: 135, dppx: 1 },
        ]}
        alt="this is an image"
      />
      <TeaserSection>International</TeaserSection>
      <TeaserFlyTitle>The UN, religion and development</TeaserFlyTitle>
      <TeaserTitle>Faith and secular global bodies learn to live together</TeaserTitle>
      <TeaserPublishDate dateTime={new Date()} />
      <TeaserText>
        THERE are many reasons why sceptics might find fault with the 17
        Sustainable Development Goals, along with 169 associated targets, which
        the leaders of the world (including the pope) will adopt, with some fanfare,
        in New York this week. One problem, as a colleague has written, is that they
        are simply too numerous. As the French statesman Georges Clemenceau
        for a new world order, were enough for the good Lord.
      </TeaserText>
      <em className="example-extra">You can add extra items to the text group</em>
    </TeaserLink>
  </Teaser>
);
