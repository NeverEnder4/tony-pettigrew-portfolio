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
  describe('on initial render', () => {
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

    it('sets disabled state back to false after delay', () => {
      jest.useFakeTimers();

      const instance = wrapper.instance();

      instance.onClickHandler();
      instance.enableButton(wrapper);

      jest.runAllTimers();
      expect(wrapper.state().disabled).toEqual(false);
    });
  });

  describe('after two clicks', () => {
    const wrapper = mount(<ContentSlider />);
    const button = wrapper.find('.down-arrow-button');

    it('sets clickCount state to 0 when at the end of the contentRefArr', () => {
      wrapper.setState({ clickCount: 2 });
      button.simulate('click');
      expect(wrapper.state().clickCount).toEqual(0);
    });
  });
});
