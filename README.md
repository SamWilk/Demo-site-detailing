# Florida Boys Mobile Detail Site

Next.js site for Florida Boys Mobile Detail with a Resend-backed contact form.

## Local Setup

Install dependencies:

```bash
npm install
```

Create `.env.local` from `.env.example` and set:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=samwilk1898@gmail.com
CONTACT_FROM_EMAIL="Florida Boys Website <onboarding@resend.dev>"
```

For production, add the same variables in Vercel Project Settings > Environment Variables.

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm run lint
npm run build
```
