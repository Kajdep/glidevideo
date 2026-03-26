import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-KMPHX5TNYM";

/**
 * Hook to initialize Google Analytics and track page views.
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      ReactGA.initialize(MEASUREMENT_ID);
      isInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (isInitialized.current) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);
};

/**
 * A headless component that initializes and tracks Google Analytics page views.
 * It must be placed inside the React Router context.
 */
export const GoogleAnalyticsTracker = () => {
  useGoogleAnalytics();
  return null;
};