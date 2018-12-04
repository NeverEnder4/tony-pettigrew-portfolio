// Animate DOM nodes in
function iconScaleIn(elementArr, timeline) {
  const tl = timeline;
  tl.staggerTo(
    elementArr,
    0.4,
    { scale: 1, ease: Back.easeOut.config(1.7) },
    0.1,
  );
}

export { iconScaleIn };
