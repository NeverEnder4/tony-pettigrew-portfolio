import Vivus from 'vivus';

const drawSVG = id => {
  const myVivus = new Vivus(
    id,
    {
      type: 'delayed',
      duration: 100,
      pathTimingFunction: Vivus.EASE_OUT,
      selfDestroy: false,
    },
    () => {
      myVivus.destroy();
    },
  );
  // myVivus.play();
};

export { drawSVG };
