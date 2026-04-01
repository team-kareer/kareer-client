type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

let initialized = false;

export const InitAnalytics = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!import.meta.env.PROD || !measurementId || initialized) {
    return;
  }

  const win = window as AnalyticsWindow;
  const src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);

  win.dataLayer = win.dataLayer || [];
  if (!win.gtag) {
    win.gtag = function () {
      win.dataLayer?.push(arguments);
    };
  }

  win.gtag('js', new Date());
  win.gtag('config', measurementId);
  initialized = true;
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>,
) => {
  const gtag = (window as AnalyticsWindow).gtag;

  if (!gtag) {
    return;
  }

  gtag('event', eventName, params);
};
