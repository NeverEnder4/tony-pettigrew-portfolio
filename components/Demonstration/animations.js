function demoScaleIn(tl, ref) {
  tl.to(ref, 0.1, { scale: 1, ease: Back.easeOut.config(1.2) });
}

export { demoScaleIn };
