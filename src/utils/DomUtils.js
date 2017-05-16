export const getAnimationTransition = (deltaX, deltaY) => ({
  transform: `translate(${deltaX}px, ${deltaY}px)`,
  transition: 'transform 0ms'
});

export const setNodeStyle = (node, style) => {
  Object.keys(style).forEach((key) => {
    node.style[key] = style[key];
  });
};
