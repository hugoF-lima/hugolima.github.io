import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export interface RectSnapshot {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const transitionTimings = {
  forwardOverlayDelay: 90,
  forwardRouteDelay: 300,
  detailSettleDelay: 180,
  reverseRouteDelay: 120,
  homeSettleDelay: 320,
} as const;

export type TransitionPhase =
  | 'idle'
  | 'homeExit'
  | 'routeForward'
  | 'detailSettling'
  | 'routeReverse'
  | 'homeSettling';

export type TransitionDirection = 'forward' | 'reverse' | null;

export interface ProjectTransitionSnapshot {
  slug: string | null;
  direction: TransitionDirection;
  phase: TransitionPhase;
  sourceRect: RectSnapshot | null;
  targetRect: RectSnapshot | null;
  mediaWidth: number | null;
  homeScrollY: number;
}

interface StartTransitionPayload {
  slug: string;
  sourceRect: RectSnapshot;
  mediaWidth: number;
  homeScrollY: number;
}

interface ProjectTransitionContextValue {
  transition: ProjectTransitionSnapshot;
  startForwardTransition: (payload: StartTransitionPayload) => void;
  beginForwardOverlay: (targetRect: RectSnapshot) => void;
  syncTargetRect: (targetRect: RectSnapshot) => void;
  settleIntoDetail: (targetRect: RectSnapshot) => void;
  startReverseTransition: (payload: StartTransitionPayload) => void;
  settleIntoHome: (targetRect: RectSnapshot) => void;
  clearTransition: () => void;
}

const initialTransition: ProjectTransitionSnapshot = {
  slug: null,
  direction: null,
  phase: 'idle',
  sourceRect: null,
  targetRect: null,
  mediaWidth: null,
  homeScrollY: 0,
};

const ProjectTransitionContext = createContext<ProjectTransitionContextValue | null>(null);

export const snapshotRect = (rect: DOMRect | DOMRectReadOnly): RectSnapshot => ({
  top: rect.top,
  left: rect.left,
  width: rect.width,
  height: rect.height,
});

export const clampTransitionRect = (rect: RectSnapshot): RectSnapshot => {
  const top = Math.max(rect.top, 24);
  const maxHeight = Math.max(Math.min(window.innerHeight - top - 24, 760), 280);

  return {
    ...rect,
    top,
    height: Math.min(rect.height, maxHeight),
  };
};

export const getExpandedDetailRect = (hasShowcase: boolean): RectSnapshot => {
  const headerElement = document.querySelector('.site-header');
  const headerBottom = headerElement instanceof HTMLElement
    ? headerElement.getBoundingClientRect().bottom
    : 0;
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth <= 768;
  const horizontalPadding = isMobile ? 16 : 32;
  const width = isMobile
    ? viewportWidth - horizontalPadding * 2
    : Math.min(viewportWidth * 0.8, 1100);
  const top = Math.max(headerBottom + 20, 24);
  const targetHeight = isMobile
    ? (hasShowcase ? 620 : 520)
    : (hasShowcase ? 700 : 560);

  return clampTransitionRect({
    top,
    left: Math.max((viewportWidth - width) / 2, horizontalPadding),
    width,
    height: targetHeight,
  });
};

export const ProjectTransitionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [transition, setTransition] = useState<ProjectTransitionSnapshot>(initialTransition);

  const startForwardTransition = useCallback(({ slug, sourceRect, mediaWidth, homeScrollY }: StartTransitionPayload) => {
    setTransition({
      slug,
      direction: 'forward',
      phase: 'homeExit',
      sourceRect,
      targetRect: sourceRect,
      mediaWidth,
      homeScrollY,
    });
  }, []);

  const beginForwardOverlay = useCallback((targetRect: RectSnapshot) => {
    setTransition((current) => ({
      ...current,
      phase: 'routeForward',
      targetRect,
    }));
  }, []);

  const syncTargetRect = useCallback((targetRect: RectSnapshot) => {
    setTransition((current) => {
      if (
        current.targetRect &&
        current.targetRect.top === targetRect.top &&
        current.targetRect.left === targetRect.left &&
        current.targetRect.width === targetRect.width &&
        current.targetRect.height === targetRect.height
      ) {
        return current;
      }

      return {
        ...current,
        targetRect,
      };
    });
  }, []);

  const settleIntoDetail = useCallback((targetRect: RectSnapshot) => {
    setTransition((current) => ({
      ...current,
      phase: 'detailSettling',
      targetRect,
    }));
  }, []);

  const startReverseTransition = useCallback(({ slug, sourceRect, mediaWidth, homeScrollY }: StartTransitionPayload) => {
    setTransition({
      slug,
      direction: 'reverse',
      phase: 'routeReverse',
      sourceRect,
      targetRect: sourceRect,
      mediaWidth,
      homeScrollY,
    });
  }, []);

  const settleIntoHome = useCallback((targetRect: RectSnapshot) => {
    setTransition((current) => ({
      ...current,
      phase: 'homeSettling',
      targetRect,
    }));
  }, []);

  const clearTransition = useCallback(() => {
    setTransition((current) => ({
      ...initialTransition,
      homeScrollY: current.homeScrollY,
    }));
  }, []);

  const value = useMemo<ProjectTransitionContextValue>(() => ({
    transition,
    startForwardTransition,
    beginForwardOverlay,
    syncTargetRect,
    settleIntoDetail,
    startReverseTransition,
    settleIntoHome,
    clearTransition,
  }), [beginForwardOverlay, clearTransition, settleIntoDetail, settleIntoHome, startForwardTransition, startReverseTransition, syncTargetRect, transition]);

  return (
    <ProjectTransitionContext.Provider value={value}>
      {children}
    </ProjectTransitionContext.Provider>
  );
};

export const useProjectTransition = (): ProjectTransitionContextValue => {
  const context = useContext(ProjectTransitionContext);

  if (!context) {
    throw new Error('useProjectTransition must be used within ProjectTransitionProvider');
  }

  return context;
};
