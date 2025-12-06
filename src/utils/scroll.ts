
export const lockScroll = () => {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollBarWidth}px`;
};

export const unlockScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};
