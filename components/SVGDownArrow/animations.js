import { TweenLite } from 'gsap';

export const appear = ref => {
  TweenLite.to(ref, 0.4, { autoAlpha: 1, delay: 2, y: '0%' });
};

const float = ref => {
  return TweenLite.fromTo(
    ref,
    0.7,
    {
      y: '0%',
    },
    {
      y: '-30%',
      ease: Expo.easeOut,
    },
  );
};

export const floatTimeline = (ref, tl) => {
  tl.add(float(ref));
};
