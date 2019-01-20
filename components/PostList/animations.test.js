import { TimelineLite } from 'gsap';

import { fadeInitialPostsIn } from './animations';

describe('fadeInitialPostsIn function', () => {
  let mockTL;
  beforeEach(() => {
    mockTL = new TimelineLite();
  });

  it('returns null if refArr is empty', () => {
    const result = fadeInitialPostsIn([], mockTL);
    expect(result).toEqual(null);
  });

  it('returns a timeline with 1 tween if refArr has 1 item', () => {
    const mockRefArr = ['.postOne'];

    const result = fadeInitialPostsIn(mockRefArr, mockTL);
    expect(result.getChildren(false, true, false, 0).length).toEqual(1);
  });

  it('returns a timeline with 2 tweens if refArr has 2 items', () => {
    const mockRefArr = ['.postOne', '.postTwo'];

    const result = fadeInitialPostsIn(mockRefArr, mockTL);
    expect(result.getChildren(false, true, false, 0).length).toEqual(2);
  });

  it('returns a timeline with 3 tweens if refArr has 3 items', () => {
    const mockRefArr = ['.postOne', '.postTwo', '.postThree'];

    const result = fadeInitialPostsIn(mockRefArr, mockTL);
    expect(result.getChildren(false, true, false, 0).length).toEqual(3);
  });
});
