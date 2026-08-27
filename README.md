# Brio Email Foundation

Reusable email system for BrioWeb client websites.

## Architecture

```text
Website
   ↓
Brio Email Engine
   ↓
Provider Adapter
   ↓
Resend
   ↓
Inbox
```

The website communicates with the Brio Email Engine through `sendEmail()`. The website does not need to interact with Resend directly.

## Current Features

* Brio Email Engine
* Resend provider adapter
* Resend API client
* React Email templates
* Environment variable validation
* TypeScript type checking
* Local email test script
* Welcome email template

## Requirements

* Node.js
* npm
* A Resend account
* A Resend API key with sending access

## Installation

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_verified_sender
```

For initial Resend testing, the sender can be:

```env
RESEND_FROM_EMAIL=onboarding@resend.dev
```

Never commit `.env` or real API keys to GitHub.

## Usage

The public interface is:

```typescript
import { sendEmail } from 'brio-email-foundation';

const result = await sendEmail({
  to: 'customer@example.com',
  subject: 'Welcome!',
  template: 'welcome',
  data: {
    name: 'Brandon',
  },
});

console.log(result);
```

A successful result looks like:

```typescript
{
  success: true,
  id: 'email-id'
}
```

If sending fails:

```typescript
{
  success: false,
  error: 'Error message'
}
```

## Available Templates

### `welcome`

Requires:

```typescript
data: {
  name: string;
}
```

Example:

```typescript
await sendEmail({
  to: 'customer@example.com',
  subject: 'Welcome to BrioWeb',
  template: 'welcome',
  data: {
    name: 'Brandon',
  },
});
```

## Testing

The repository includes a local test sender.

Configure `.env`, then run:

```bash
npm run test:email
```

The test sends the welcome email to the address defined in `scripts/test-email.ts`.

TypeScript can be checked with:

```bash
npm run typecheck
```

## Project Structure

```text
src/
├── config/
│   └── get-env-var.ts
├── email/
│   ├── engine/
│   │   └── send-email.ts
│   ├── providers/
│   │   └── resend/
│   │       ├── resend-adapter.tsx
│   │       └── resend-client.ts
│   ├── templates/
│   │   └── welcome.tsx
│   └── types/
│       └── email.ts
└── index.ts

scripts/
└── test-email.ts
```

## Provider Architecture

Resend is currently the provider used by the foundation.

Provider-specific logic is isolated inside:

```text
src/email/providers/resend/
```

This allows additional providers to be introduced later without requiring client websites to communicate directly with a provider.

## Adding Templates

Email templates are stored in:

```text
src/email/templates/
```

When additional templates are added, the email type definitions and provider adapter should be updated to support them.

## Security

* API keys belong in environment variables.
* `.env` is excluded from Git.
* Never commit real API keys.
* Never expose API keys in client-side code.
* Server-side execution is required for sending emails.

## Scope of v1

Brio Email Foundation v1 is intentionally small.

It provides:

* Email sending abstraction
* Resend integration
* React Email templates
* Environment configuration
* Local testing

It does not provide:

* Authentication
* Database functionality
* Booking systems
* SMS
* Stripe
* Contact forms
* Client website UI
* Email marketing automation

Those systems can be integrated separately when required by a client project.

## Status

**Brio Email Foundation v1 — Development**

The foundation has been tested with a real Resend API request and successful inbox delivery.
