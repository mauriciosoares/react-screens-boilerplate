jest.unmock('../');
jest.mock('../index.css', () => ({}));

import React from 'react';
import Label from '../';
import {shallow} from 'enzyme';

describe('Label', () => {
  it('should render the label with the correct text', () => {
    const text = "My Cool Text";
    const wrapper = shallow(<Label text={text} />);

    expect(wrapper.text()).toEqual(text);
  });
});
