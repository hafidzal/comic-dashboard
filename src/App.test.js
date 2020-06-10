import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { italic } from 'ansi-colors';


describe('login page test', ()=> {
  const wrapper = shallow(<App />);

  it('should have header, main and footer', () => {
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('main')).toHaveLength(1);
    expect(wrapper.find('footer')).toHaveLength(1);
  })
});