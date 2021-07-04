import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';

describe('Header component', () => {
  it('displays the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
