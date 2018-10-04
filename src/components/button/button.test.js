import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('run action on click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button onClick={mock} />);
    wrapper.simulate('click');
    expect(mock).toBeCalled();
  });
});
