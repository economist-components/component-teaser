import 'babel-polyfill';
import Teaser from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe.skip('Teaser', () => {
  it('renders a React element', () => {
    React.isValidElement(<Teaser />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let teaser = null;
    beforeEach(() => {
      rendered = mount(<Teaser />);
      teaser = rendered.find('.teaser');
    });

    it('renders a top level div.teaser', () => {
      teaser.should.have.tagName('div');
      teaser.should.have.className('teaser');
    });

    xit('renders <FILL THIS IN>', () => {
      teaser.should.have.exactly(1).descendants('.the-descendent-class');
      teaser.find('.the-descendent-class').should.have.tagName('TAG');
    });

  });

});
