import { TweenLite, Circ } from 'gsap';

const fadeOutLoad = element => {
  TweenLite.to(element, 0.3, {
    scale: 4,
    opacity: 0,
    ease: Circ.easeOut,
    delay: 2.7,
  });
};

export { fadeOutLoad };
