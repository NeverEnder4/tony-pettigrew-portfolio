import { shallow } from 'enzyme';

import PostItem from './PostItem';

describe('PostList component', () => {
  const mockPostData = {
    slug: 'the-big-o',
    title: 'The Big O',
    metadata: {
      description:
        'You may not be thinking about Big O when developing a si…it is a topic that will come up in technical interviews.',
    },
    created_at: '2018-12-24T13:47:23.259Z',
  };

  const wrapper = shallow(<PostItem post={mockPostData} />);

  it('renders post without error', () => {
    wrapper.exists('.post');
  });

  it('renders an a tag with the correct title', () => {
    const aTag = wrapper.find('a.title');
    console.log(aTag);
    expect(aTag.text()).toEqual(mockPostData.title);
  });
});
