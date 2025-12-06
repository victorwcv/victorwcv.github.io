import { RefObject } from 'react';
import { useInView } from 'motion/react';

export const useView = (ref: RefObject<Element | null>, threshold: number) => {
  const isInView = useInView(ref, { margin: `${threshold}%` });
  return { isInView };
};
