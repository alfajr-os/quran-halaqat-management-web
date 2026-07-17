<div align="center">
  <img src="https://avatars.githubusercontent.com/u/306186684?s=200&v=4" alt="Itqan Web Logo" width="120" height="120" />

  # Itqan Web Client (الواجهة الأمامية) 💻

  **The modern, accessible, and responsive frontend for the Itqan Mosque Management Platform.**

  🌐 [العربية](./README.ar.md) | **English**

  [![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

---

## 🌟 Overview
`itqan-web` is the client-side application of the Itqan Ecosystem. It provides dedicated, role-based dashboards for Super Admins, Mosque Managers, Teachers, Parents, and Students. 

Engineered with **Next.js (App Router)**, the platform heavily utilizes **React Server Components (RSC)** for optimal performance, SEO, and minimal client-side JavaScript bundling.

## 🛠️ Tech Stack & Architecture

We strictly follow a **Feature-Based Folder Structure** to ensure maximum maintainability and separation of concerns.

- **Framework:** Next.js 14+ (App Router)
- **Language:** JavaScript (Strict Mode)
- **Styling:** Tailwind CSS + `shadcn/ui` (Radix UI Primitives for WAI-ARIA accessibility)
- **Data Fetching & State:** TanStack Query (React Query)
- **Forms & Validation:** React Hook Form + Zod
- **Internationalization (i18n):** Next-Intl (Full RTL/LTR support)

## 📁 Directory Structure Overview
```text
src/
├── app/               # Next.js App Router (Pages, Layouts, Loading, Error boundaries)
├── components/        # Shared global UI components (Buttons, Inputs, Modals)
├── features/          # Feature-based modules (e.g., auth, mosques, students)
│   └── students/
│       ├── api/       # TanStack query hooks & fetchers for students
│       ├── components/# Student-specific UI components
│       └── types/     # TypeScript interfaces for the student domain
├── hooks/             # Shared custom React hooks
├── lib/               # Utility functions and library configurations (Axios, cn, etc.)
└── types/             # Global TypeScript types and Enums
```

## 🚀 Getting Started

### 🛠️ Development Environment Options

To streamline the developer experience (DX), we offer flexible setup options depending on your contribution goals:

*   **Frontend-Only Contributions:**
    If you wish to contribute strictly to the user interface (`itqan-web`), **there is no need to run the backend or database locally**. We maintain a live, hosted Staging API instance for testing purposes. You can simply point your local frontend environment to it by updating your `.env.local` file:
    ```env
    NEXT_PUBLIC_API_URL=https://api-staging.itqan-os.org/v1
    ```

*   **Full-Stack Deployment & Production Setup:**
    If you intend to utilize the ecosystem completely, develop cross-layer features (Frontend + Backend), or self-host the platform for an actual mosque, you must clone and run the backend repository ([`itqan-api`](https://github.com/itqan-platform/itqan-api)) locally using Docker and PostgreSQL alongside this frontend client.
- Prerequisites
  - Node.js: v18.17.0 or higher.
  - Package Manager: We use `npm` (or `pnpm`).

## Installation
1. Clone the repository:
   ```bash
    git clone [https://github.com/itqan-platform/itqan-web.git](https://github.com/itqan-platform/itqan-web.git)
    cd itqan-web
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update `NEXT_PUBLIC_API_URL` to point to your local `itqan-api` instance.
4. Start the development server:
   ```bash
    npm run dev
   ```
   Navigate to `http://localhost:3000` to view the application.

## 🤝 Contributing
Since `itqan-web` is part of the Itqan organization, please refer to our central CONTRIBUTING.md for coding standards, pull request templates, and our Code of Conduct.

## 📄 License
This project is licensed under the MIT License.