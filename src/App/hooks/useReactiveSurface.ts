import { useMemo } from 'react';
import type { PointerEventHandler } from 'react';

type ReactiveSurfaceHandlers = {
  onPointerEnter: PointerEventHandler<HTMLElement>;
  onPointerMove: PointerEventHandler<HTMLElement>;
  onPointerLeave: PointerEventHandler<HTMLElement>;
};

const setPointerPosition = (element: HTMLElement, clientX: number, clientY: number) => {
  const rect = element.getBoundingClientRect();
  element.style.setProperty('--pointer-x', `${clientX - rect.left}px`);
  element.style.setProperty('--pointer-y', `${clientY - rect.top}px`);
};

export const useReactiveSurface = (): ReactiveSurfaceHandlers => (
  useMemo(() => ({
    onPointerEnter: (event) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const element = event.currentTarget;
      setPointerPosition(element, event.clientX, event.clientY);
      element.style.setProperty('--pointer-active', '1');
    },
    onPointerMove: (event) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const element = event.currentTarget;
      setPointerPosition(element, event.clientX, event.clientY);
      element.style.setProperty('--pointer-active', '1');
    },
    onPointerLeave: (event) => {
      const element = event.currentTarget;
      element.style.setProperty('--pointer-active', '0');
    },
  }), [])
);
