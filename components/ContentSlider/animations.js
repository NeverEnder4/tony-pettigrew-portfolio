import { TweenLite } from 'gsap';

// animate in about section content initially
export const contentEnter = (contentArr, index) => {
  TweenLite.fromTo(
    contentArr[index],
    0.6,
    {
      y: '25%',
      autoAlpha: 0,
      ease: Expo.easeOut,
    },
    {
      y: '0%',
      autoAlpha: 1,
    },
  );
};

// upon click of down arrow button in content slider the content currently shown will slide up
export const contentSlideOut = (contentArr, index) => {
  return TweenLite.to(contentArr[index], 0.4, {
    y: '-100%',
    autoAlpha: 0,
    ease: Expo.easeIn,
  });
};

// upon click of down arrow button in the content slider the next content will slide in from the bottom
export const contentSlideIn = (contentArr, index, object) => {
  return TweenLite.fromTo(
    contentArr[index],
    0.8,
    {
      y: '100%',
      ease: Expo.easeIn,
      opacity: 0,
    },
    {
      y: '0%',
      autoAlpha: 1,
      opacity: 1,
      ease: Expo.easeOut,
      delay: 0.3,
      onComplete: () => {
        object.setState({ disabled: false });
      },
    },
  );
};