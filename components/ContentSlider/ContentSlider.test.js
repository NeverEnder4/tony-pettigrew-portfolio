import { mount } from 'enzyme';

import ContentSlider from './ContentSlider';

describe('ContentSlider initial state', () => {
  const wrapper = mount(<ContentSlider />);

  it('starts with clickCount state of 0', () => {
    const clickCountState = wrapper.state().clickCount;
    expect(clickCountState).toEqual(0);
  });

  it('starts with disabled state of false', () => {
    const disabledState = wrapper.state().disabled;
    expect(disabledState).toEqual(false);
  });
});

describe('down arrow button', () => {
  const wrapper = mount(<ContentSlider />);
  const button = wrapper.find('.down-arrow-button');

  it('Content slider renders down arrow button', () => {
    expect(wrapper.exists('.down-arrow-button')).toEqual(true);
  });

  it('changes clickCount state to 1 after it is clicked', () => {
    button.simulate('click');
    expect(wrapper.state().clickCount).toEqual(1);
  });

  it('sets disabled state to true when button is clicked', () => {
    button.simulate('click');
    expect(wrapper.state().disabled).toEqual(true);
  });
});
