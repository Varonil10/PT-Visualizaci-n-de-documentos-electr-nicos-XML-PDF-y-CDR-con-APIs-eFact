# EFACT Angular Technical Test - Implementation

This repository contains a minimal Angular frontend implementing:
- Login page to obtain OAuth2 token (password grant) using given credentials.
- Document viewer page to fetch and display XML, CDR and PDF for a given ticket.
- HTTP interceptor to attach Bearer token.
- AuthGuard to protect the document viewer route.

## How to run (local dev)
Requirements: Node.js, npm, Angular CLI (optional).

1. Install:
   npm install

2. Start dev server:
   npm start
   (or: npx ng serve --open)

3. Default environment points to the provided API endpoints.

## Notes
- Credentials and sample ticket are pre-filled in the login form for convenience.
- Token is stored in localStorage under 'efact_token'. The interceptor adds Authorization header automatically.

