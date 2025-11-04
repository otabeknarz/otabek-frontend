import { usePostHog } from "posthog-js/react";

/**
 * Custom hook to track events with PostHog
 * Usage: const { trackEvent } = useAnalytics();
 * trackEvent('button_clicked', { button_name: 'contact' });
 */
export function useAnalytics() {
  const posthog = usePostHog();

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (posthog) {
      posthog.capture(eventName, properties);
    }
  };

  const identifyUser = (userId: string, properties?: Record<string, any>) => {
    if (posthog) {
      posthog.identify(userId, properties);
    }
  };

  return {
    trackEvent,
    identifyUser,
    posthog,
  };
}
