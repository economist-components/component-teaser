import 'babel-polyfill';
import Teaser from '../src';
import TeaserFlyTitle from '../src/teaser-flytitle';
import TeaserImage from '../src/teaser-image';
import TeaserLink from '../src/teaser-link';
import TeaserPublishDate from '../src/teaser-publish-date';
import TeaserSection from '../src/teaser-section';
import TeaserText from '../src/teaser-text';
import TeaserTitle from '../src/teaser-title';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();

describe('TeaserFlyTitle', () => {
  it('renders a React element', () => {
    React.isValidElement(<TeaserFlyTitle />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaserFlytitle = null;
    beforeEach(() => {
      const enableMeta = true;
      rendered = mount(
        <TeaserFlyTitle meta={enableMeta}>
          Foo
        </TeaserFlyTitle>
      );
      teaserFlytitle = rendered.find('.teaser__flytitle');
    });

    it('can render as a <meta /> tag', () => {
      teaserFlytitle.should.have.tagName('meta');
      teaserFlytitle.should.have.attr('itemprop', 'alternativeHeadline');
      teaserFlytitle.should.have.attr('content', 'Foo');
    });
  });
});

describe('TeaserImage', () => {
  it('renders a React element', () => {
    React.isValidElement(
      <TeaserImage
        sources={[
          { url: 'https://placehold.it/240x135', width: 240, height: 135, dppx: 1 },
        ]}
        alt="Foo"
      />
    ).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaserImage = null;
    beforeEach(() => {
      rendered = mount(
        <TeaserImage
          sources={[
            { url: 'https://placehold.it/240x135', width: 240, height: 135, dppx: 1 },
          ]}
          alt="Foo"
        />
      );
      teaserImage = rendered.find('.teaser__image');
    });

    it('should contain <img /> tag in the Picture component', () => {
      teaserImage.should.contain(
        <img
          alt="Foo"
          src="https://placehold.it/240x135"
          itemProp="image"
          className="picture__image"
        />
      );
    });
  });
});

describe('TeaserLink', () => {
  it('renders a React element', () => {
    React.isValidElement(<TeaserLink />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaserLink = null;
    beforeEach(() => {
      const enableMeta = true;
      rendered = mount(
        <TeaserLink
          meta={enableMeta}
          href="foo/bar"
          className="teaser__link--foo"
        >
          <div className="foo" />
        </TeaserLink>
      );
      teaserLink = rendered.find('.teaser__wrapper');
    });

    it('renders a top level div.teaser', () => {
      teaserLink.should.have.tagName('div');
      teaserLink.should.have.className('teaser__wrapper');
    });

    it('accepts a custom className', () => {
      teaserLink.should.have.className('teaser__link--foo');
    });

    it('can render as a <meta /> tag', () => {
      teaserLink.find('.teaser__link').should.have.tagName('link');
      teaserLink.find('.teaser__link').should.have.attr('itemprop', 'url');
      teaserLink.find('.teaser__link').should.have.attr('href', 'foo/bar');
    });

    it('renders children', () => {
      teaserLink.should.contain(
        <div className="foo" />
      );
    });
  });
});

describe('TeaserPublishDate', () => {
  it('renders a React element', () => {
    React.isValidElement(
      <TeaserPublishDate
        dateTime="Thu May 26 2016 15:47:10 GMT+0100 (BST)"
      />
    ).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaserPubDate = null;
    beforeEach(() => {
      rendered = mount(
        <TeaserPublishDate
          dateTime="Thu May 26 2016 15:47:10 GMT+0100 (BST)"
          format="DD MM YY"
        />
      );
      teaserPubDate = rendered.find('.teaser__datetime');
    });

    it('renders a <time /> tag', () => {
      teaserPubDate.should.have.tagName('time');
      teaserPubDate.should.have.attr('itemprop', 'datePublished dateModified');
      teaserPubDate.should.have.attr('dateTime', 'Thu May 26 2016 15:47:10 GMT+0100 (BST)');
    });

    it('accepts a custom date format', () => {
      teaserPubDate.should.have.text('26 05 16');
    });
  });
});

describe('TeaserSection', () => {
  it('renders a React element', () => {
    React.isValidElement(<TeaserSection />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaserSection = null;
    beforeEach(() => {
      const enableMeta = true;
      rendered = mount(
        <TeaserSection meta={enableMeta}>
          Foo
        </TeaserSection>
      );
      teaserSection = rendered.find('.teaser__section');
    });

    it('can render as a <meta /> tag', () => {
      teaserSection.should.have.tagName('meta');
      teaserSection.should.have.attr('itemprop', 'articleSection');
      teaserSection.should.have.attr('content', 'Foo');
    });
  });
});

describe('TeaserText', () => {
  it('renders a React element', () => {
    React.isValidElement(<TeaserText />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaserText = null;
    beforeEach(() => {
      const enableMeta = true;
      rendered = mount(
        <TeaserText meta={enableMeta}>
          Foo
        </TeaserText>
      );
      teaserText = rendered.find('.teaser__text');
    });

    it('can render as a <meta /> tag', () => {
      teaserText.should.have.tagName('meta');
      teaserText.should.have.attr('itemprop', 'description');
      teaserText.should.have.attr('content', 'Foo');
    });
  });
});

describe('TeaserTitle', () => {
  it('renders a React element', () => {
    React.isValidElement(<TeaserTitle />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaserTitle = null;
    beforeEach(() => {
      const enableMeta = true;
      rendered = mount(
        <TeaserTitle meta={enableMeta}>
          Foo
        </TeaserTitle>
      );
      teaserTitle = rendered.find('.teaser__title');
    });

    it('can render as a <meta /> tag', () => {
      teaserTitle.should.have.tagName('meta');
      teaserTitle.should.have.attr('itemprop', 'headline');
      teaserTitle.should.have.attr('content', 'Foo');
    });
  });
});

describe('Teaser', () => {
  it('renders a React element', () => {
    React.isValidElement(
      <Teaser>
        <TeaserImage
          sources={[
            { url: 'https://placehold.it/240x135', width: 240, height: 135, dppx: 1 },
          ]}
          alt="this is an image"
        />
        <TeaserTitle>Foo</TeaserTitle>
        <TeaserPublishDate dateTime="Thu May 26 2016 15:47:10 GMT+0100 (BST)" />
      </Teaser>
    ).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaser = null;
    beforeEach(() => {
      rendered = mount(
        <Teaser
          className="teaser--foo"
          itemProp="foo"
          itemType="bar"
          publisher="baz"
        >
          <TeaserImage
            sources={[
              { url: 'https://placehold.it/240x135', width: 240, height: 135, dppx: 1 },
            ]}
            alt="this is an image"
          />
          <TeaserTitle>Foo</TeaserTitle>
          <TeaserPublishDate dateTime="Thu May 26 2016 15:47:10 GMT+0100 (BST)" />
        </Teaser>
      );
      teaser = rendered.find('.teaser');
    });

    it('renders a top level div.teaser', () => {
      teaser.should.have.tagName('article');
      teaser.should.have.className('teaser');
    });

    it('accepts a custom className', () => {
      teaser.should.have.className('teaser--foo');
    });

    it('accepts a custom schema.org items', () => {
      teaser.should.have.attr('itemprop', 'foo');
      teaser.should.have.attr('itemtype', 'bar');
      teaser.find('.teaser__publisher').should.have.attr('content', 'baz');
    });

    it('renders children', () => {
      teaser.should.contain(
        <TeaserImage
          sources={[
            { url: 'https://placehold.it/240x135', width: 240, height: 135, dppx: 1 },
          ]}
          alt="this is an image"
        />
      );

      teaser.should.contain(
        <TeaserTitle>Foo</TeaserTitle>
      );

      teaser.should.contain(
        <TeaserPublishDate dateTime="Thu May 26 2016 15:47:10 GMT+0100 (BST)" />
      );
    });
  });
});
