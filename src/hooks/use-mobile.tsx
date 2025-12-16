import * as React from "react";

/**
 * APS INDUSTRIAL VIEWPORT HOOK
 * Uses matchMedia for high-performance breakpoint detection.
 * Optimized to prevent layout shifts and CPU spikes on resize.
 */

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Initialize state based on current window width to prevent hydration flicker
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false;
  });

  React.useEffect(() => {
    // 1. Define the media query listener
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // 2. Performance-optimized handler
    const onChange = () => {
      setIsMobile(mql.matches);
    };

    // 3. Attach listener (with fallback for legacy Safari browsers)
    try {
      mql.addEventListener("change", onChange);
    } catch (e) {
      mql.addListener(onChange);
    }

    // 4. Force check once on mount
    setIsMobile(mql.matches);

    // 5. Cleanup to prevent memory leaks
    return () => {
      try {
        mql.removeEventListener("change", onChange);
      } catch (e) {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return isMobile;
}