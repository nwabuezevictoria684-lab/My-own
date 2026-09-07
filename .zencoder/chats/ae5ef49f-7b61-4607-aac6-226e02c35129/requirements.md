# Product Requirements Document (PRD) - Nova Bank UI

## Project Overview
A professional, elegant, and modern banking web application UI built with React, Tailwind CSS, and Lucide Icons. The application will feature a multi-page landing site and a secure-looking dashboard for account management, using a static data file for authentication and user data.

## Target Audience
- Retail banking customers looking for a premium digital experience.

## Functional Requirements

### 1. Landing Pages (Public)
- **Homepage**: Hero section with CTA, features overview, and trust signals.
- **About Page**: Information about the bank's mission, values, and history.
- **Services Page**: Detailed list of banking services (Savings, Loans, Investments, etc.).
- **Blog Page**: Articles and financial news.
- **Login Page**: A secure-looking form to authenticate users against a static data file.

### 2. Authentication
- **Mechanism**: The login form will validate credentials against a pre-defined list of users in `src/data.ts`.
- **Session Management**: Simple state-based "logged in" status (e.g., in React Context or LocalStorage).
- **Redirection**: Successful login redirects to the Dashboard. Unsuccessful attempts show error messages.

### 3. Dashboard (Private)
- **Layout**: Persistent sidebar for navigation and a main content area.
- **Sidebar Navigation**:
    - Overview (Balance, Recent Activity)
    - Transactions
    - Withdrawals
    - Payments (Bill pay, transfers)
    - Settings/Profile
- **User Information**: Display balance, transaction history, and personal details fetched from the data file.

### 4. Data Structure (`src/data.ts`)
- An array of at least 3 user objects.
- **User Object Schema**:
    - `id`: Unique identifier
    - `name`: Full name
    - `email`: Login email
    - `password`: Login password (plain text for this UI-only prototype)
    - `balance`: Current account balance
    - `transactions`: Array of transaction objects (date, description, amount, type: 'credit'|'debit')
    - `withdrawals`: Array of withdrawal records.

## Non-Functional Requirements
- **Aesthetics**: Elegant, professional, and "most beautiful" design using Tailwind CSS. High-quality typography, spacing, and subtle shadows.
- **Responsiveness**: Fully functional and beautiful on desktop, tablet, and mobile.
- **Tech Stack**: React 19, Tailwind CSS 3, Lucide React (icons), React Router 7.

## Clarifications Needed
1. **Brand Name**: Is "Nova Bank" acceptable, or do you have a specific name in mind?
2. **"Admin" Login**: You mentioned "login to the admin". Should the dashboard be a customer-facing portal or an administrative backend for bank employees?
3. **Payment Details**: What specific fields should the "Payment page" include? (e.g., Recipient Name, Account Number, Amount, Category).

## Success Criteria
- All requested pages are implemented and navigable.
- Login works correctly using the provided data file.
- Dashboard displays user-specific data dynamically based on the logged-in user.
- The UI meets the "elegant and professional" aesthetic requirement.
