import { useMemo } from 'react';
import type { PointerEventHandler } from 'react';

const SETTLE_MS = 5000;
const settleTimeouts = new WeakMap<HTMLElement, number>();

export type SurfaceBorderFlowHandlers = {
  onPointerEnter: PointerEventHandler<HTMLElement>;
  onPointerLeave: PointerEventHandler<HTMLElement>;
};

const clearSettleTimeout = (element: HTMLElement) => {
  const timeoutId = settleTimeouts.get(element);

  if (timeoutId !== undefined) {
    window.clearTimeout(timeoutId);
    settleTimeouts.delete(element);
  }
};

const scheduleSettle = (element: HTMLElement) => {
  clearSettleTimeout(element);

  const timeoutId = window.setTimeout(() => {
    element.classList.add('surface-border-flow-settled');
    settleTimeouts.delete(element);
  }, SETTLE_MS);

  settleTimeouts.set(element, timeoutId);
};

export const useSurfaceBorderFlow = (): SurfaceBorderFlowHandlers => (
  useMemo(() => ({
    onPointerEnter: (event) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const element = event.currentTarget;
      element.classList.remove('surface-border-flow-settled');
      scheduleSettle(element);
    },
    onPointerLeave: (event) => {
      const element = event.currentTarget;
      element.classList.remove('surface-border-flow-settled');
      clearSettleTimeout(element);
    },
  }), [])
);
