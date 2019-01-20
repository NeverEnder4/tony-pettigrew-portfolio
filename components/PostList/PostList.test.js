import { mount } from 'enzyme';
import sinon from 'sinon';

import PostList from './PostList';

describe('PostList component', () => {
  const mockPostsData = [
    {
      _id: '5c20e222493d12417d5d5a76',
      slug: 'the-big-o',
      title: 'The Big O',
      metadata: {
        description:
          'You may not be thinking about Big O when developing a si…it is a topic that will come up in technical interviews.',
      },
      created_at: '2018-12-24T13:47:23.259Z',
    },
    {
      _id: '11i4e222493d12417d5d5a76',
      slug: 'how-jwt-tokens-work',
      title: 'How JWT Tokens Work',
      metadata: {
        description:
          'What is a JWT? What is the structure and how is it useful for authentication?',
      },
      created_at: '2018-12-24T13:41:54.275Z',
    },
    {
      _id: '2r40e222493d12417d5d5a76',
      slug: 'the-big-o',
      title: 'The Big O',
      metadata: {
        description:
          'You may not be thinking about Big O when developing a si…it is a topic that will come up in technical interviews.',
      },
      created_at: '2018-12-24T13:47:23.259Z',
    },
    {
      _id: 'i980e222493d12417d5d5a76',
      slug: 'the-big-o',
      title: 'The Big O',
      metadata: {
        description:
          'You may not be thinking about Big O when developing a si…it is a topic that will come up in technical interviews.',
      },
      created_at: '2018-12-24T13:47:23.259Z',
    },
  ];

  const props = { posts: mockPostsData, skip: 0, page: 1 };

  const setup = props => {
    return mount(<PostList {...props} />);
  };

  describe('on initial render', () => {
    const wrapper = setup(props);

    it('only renders 3 posts if given an array of 4', () => {
      expect(wrapper.props().posts.length).toEqual(4);

      const posts = wrapper.find('.post');
      expect(posts.length).toEqual(3);
    });
  });

  describe('shouldComponentUpdate lifecycle method', () => {
    const wrapper = setup(props);

    const shouldComponentUpdate = sinon.spy(
      PostList.prototype,
      'shouldComponentUpdate',
    );

    it('does not update when page prop does not change', () => {
      expect(shouldComponentUpdate.callCount).toEqual(0);
      expect(wrapper.props().page).toEqual(1);

      wrapper.setProps({ page: 1 });

      expect(shouldComponentUpdate.returned(false)).toEqual(true);
      expect(shouldComponentUpdate.callCount).toEqual(1);
    });

    it('updates when page prop changes', () => {
      expect(shouldComponentUpdate.callCount).toEqual(1);
      wrapper.setProps({ page: 2 });

      expect(wrapper.props().page).toEqual(2);

      expect(shouldComponentUpdate.callCount).toEqual(2);
      expect(shouldComponentUpdate.returned(true)).toEqual(true);
    });
  });
  describe('getMaxIndex method', () => {
    const wrapper = setup(props);
    it('returns 3 when skip is 0', () => {
      const getMaxIndex = wrapper.instance().getMaxIndex;
      const page = 1;
      const skip = 0;
      expect(getMaxIndex(page, skip)).toEqual(3);
    });

    it('returns 6 when page is 2', () => {
      const getMaxIndex = wrapper.instance().getMaxIndex;
      const page = 2;
      const skip = 3;
      expect(getMaxIndex(page, skip)).toEqual(6);
    });
  });
});
