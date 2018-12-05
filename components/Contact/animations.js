// Animate DOM nodes in
function iconScaleIn(elementArr, emailLink, timeline) {
  const tl = timeline;
  tl.staggerTo(
    elementArr,
    0.4,
    { scale: 1, ease: Back.easeOut.config(1.7) },
    0.1,
  );
  tl.to(
    emailLink,
    0.2,
    {
      y: 0,
      opacity: 0.8,
      ease: Back.easeOut.config(1.7),
    },
    '-=0.2',
  );
}

export { iconScaleIn };
