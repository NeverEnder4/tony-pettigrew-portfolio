import { Power2 } from 'gsap';

export const fadeInitialPostsIn = (refArr, tl) => {
  if (refArr.length === 0) return null;
  tl.fromTo(
    refArr[0],
    0.4,
    { opacity: 0, ease: Power2.easeIn },
    { opacity: 1, ease: Power2.easeIn },
  );
  if (refArr.length > 1) {
    tl.fromTo(
      refArr[1],
      0.4,
      { opacity: 0, ease: Power2.easeIn },
      { opacity: 1, ease: Power2.easeIn },
      '-=0.2',
    );
  }
  if (refArr.length > 2) {
    tl.fromTo(
      refArr[2],
      0.4,
      { opacity: 0, ease: Power2.easeIn },
      { opacity: 1, ease: Power2.easeIn },
      '-=0.2',
    );
  }
  return tl;
};
