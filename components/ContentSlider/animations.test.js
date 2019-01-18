import { mount } from 'enzyme';

import { contentSlideIn } from './animations';
import ContentSlider from './ContentSlider';

describe('contentSlideIn function', () => {
  it('sets the disabled state of ContentSlider to false upon completion', () => {
    const wrapper = mount(<ContentSlider />);
    const contentArr = ['intro', 'middle', 'end'];

    const disabledState = wrapper.state().disabled;

    wrapper.setState({ disabled: true });
    contentSlideIn(contentArr, 1, wrapper);
    expect(disabledState).toEqual(false);
  });
});
