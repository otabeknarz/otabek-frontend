# PostHog Analytics Setup

This project uses PostHog for analytics and user behavior tracking.

## Setup Instructions

1. **Get your PostHog API key**:
   - Sign up at [PostHog](https://posthog.com)
   - Create a new project
   - Copy your Project API Key from Settings

2. **Configure environment variables**:
   - Copy `.env.example` to `.env.local`
   - Add your PostHog credentials:
     ```
     NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_key_here
     NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
     ```

3. **The integration is already set up!**
   - PostHog provider is configured in `app/layout.tsx`
   - Automatic pageview tracking is enabled
   - Custom event tracking is available via `useAnalytics()` hook

## Usage

### Track Custom Events

```tsx
import { useAnalytics } from "@/lib/posthog";

function MyComponent() {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent('button_clicked', {
      button_name: 'contact',
      location: 'hero_section'
    });
  };

  return <button onClick={handleClick}>Contact Me</button>;
}
```

### Identify Users

```tsx
import { useAnalytics } from "@/lib/posthog";

function MyComponent() {
  const { identifyUser } = useAnalytics();

  const handleLogin = (userId: string) => {
    identifyUser(userId, {
      email: 'user@example.com',
      name: 'John Doe'
    });
  };
}
```

## What's Being Tracked

- **Automatic**: Page views, page leaves
- **Custom Events** (examples in code):
  - `contact_linkedin_clicked` - When LinkedIn button is clicked
  - `contact_email_clicked` - When email button is clicked

## Files Structure

- `/components/providers/posthog-provider.tsx` - PostHog initialization
- `/components/providers/posthog-pageview.tsx` - Automatic pageview tracking
- `/lib/posthog.ts` - Custom analytics hook
- `/app/layout.tsx` - Integration point

## Privacy

PostHog respects user privacy. Configure your PostHog project settings to:
- Respect Do Not Track
- Anonymize IPs
- Set data retention policies
