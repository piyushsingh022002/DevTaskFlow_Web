### Issue #1: Initialize Vite + React + TypeScript Project
**Labels:** setup, learning
**Description:**
Kick off DevTaskFlow by initializing a Vite-powered React project with TypeScript. This step sets up the base environment for all subsequent development and familiarizes you with the latest frontend tooling.
**Checklist:**
- [ ] Install Node.js (if not already installed)
- [ ] Run `npm create vite@latest` and set up with React + TypeScript template
- [ ] Initialize Git and make the first commit
- [ ] Review folder structure and default files created
- [ ] Add initial README.md with project details
**Next Issue:** #2

---

### Issue #2: Setup Project Directory Structure & Install Dependencies
**Labels:** setup, enhancement
**Description:**
Prepare DevTaskFlow for modular development by arranging the recommended folder structure and installing all key dependencies required for the project.
**Checklist:**
- [ ] Create folders: `assets`, `components`, `pages`, `contexts`, `hooks`, `services`, `utils`, `styles`, `types` under `src/`
- [ ] Install React Router v6, Bootstrap 5, Axios, Chart.js (or Recharts), classnames, JWT-decode, etc.
- [ ] Configure Bootstrap import in the app
- [ ] Update README.md with structure and dependency info
**Next Issue:** #3

---

### Issue #3: Setup ESLint, Prettier, and TypeScript Configurations
**Labels:** setup, enhancement, learning
**Description:**
Establish robust coding standards and static checks to maintain code quality throughout DevTaskFlow.
**Checklist:**
- [ ] Set up ESLint with React and TypeScript plugins
- [ ] Set up Prettier for code formatting
- [ ] Configure TypeScript (`tsconfig.json`) for path aliases and strict settings
- [ ] Add example `.eslintrc` and `.prettierrc` files
- [ ] Add recommended VSCode extensions to README
**Next Issue:** #4

---

### Issue #4: Plan App Routing Structure with React Router v6
**Labels:** feature, planning, learning
**Description:**
Design the main navigation and routing strategy for DevTaskFlow. Learn about nested routes, layouts, and protected routes.
**Checklist:**
- [ ] List all key pages required (Dashboard, Projects, Tasks, Team, Login, etc.)
- [ ] Sketch a basic route hierarchy
- [ ] Decide on layouts for public and private routes
- [ ] Document planned routes in README or separate doc
**Next Issue:** #5

---

### Issue #5: Create Theme Context – Light & Dark Modes
**Labels:** feature, enhancement
**Description:**
Implement a Theme Context to enable light/dark mode toggling throughout the app.
**Checklist:**
- [ ] Create ThemeContext and provider in `src/contexts/`
- [ ] Integrate theme switching logic and persistence using localStorage
- [ ] Add useTheme hook for easy access
- [ ] Apply themes with global CSS variables or Bootstrap utilities
**Next Issue:** #6

---

### Issue #6: Implement App Layout Component (Header, Sidebar, Main)
**Labels:** feature, enhancement
**Description:**
Develop a flexible layout component that includes responsive Header and Sidebar, reflecting current navigation and theme.
**Checklist:**
- [ ] Design Layout component in `components/`
- [ ] Build Header with app name, theme toggle, and user placeholder
- [ ] Build Sidebar with nav links and responsive collapse
- [ ] Incorporate ThemeContext usage
- [ ] Use Bootstrap Grid for layouting
**Next Issue:** #7

---

### Issue #7: Build Dummy Pages for Each Core Section
**Labels:** feature, learning
**Description:**
Create placeholder pages for all key sections (Dashboard, Projects, Tasks, Team) and integrate them into the router and layout.
**Checklist:**
- [ ] Build empty `DashboardPage`, `ProjectsPage`, `TasksPage`, `TeamPage`, and `LoginPage` in `pages/`
- [ ] Add routes for each page
- [ ] Confirm navigation works between pages
**Next Issue:** #8

---

### Issue #8: Set Up Global State Management with Context API
**Labels:** feature, learning, enhancement
**Description:**
Implement root-level Context Providers for app-wide state. Learn state lifting and context composition.
**Checklist:**
- [ ] Create an AppStateContext and provider for global state needs
- [ ] Set up context for user/auth, theme, modal, and notifications
- [ ] Document usage with example context consumers
**Next Issue:** #9

---

### Issue #9: Design and Build Login Page (UI Only)
**Labels:** feature, learning
**Description:**
Design a modern, responsive login screen with validation for user authentication. Focus on UI/UX only in this step.
**Checklist:**
- [ ] Create LoginPage component in `pages/`
- [ ] Form inputs: email/username and password
- [ ] Add client-side validation and helpful error messages
- [ ] Style using Bootstrap forms and utilities
- [ ] Add placeholder for “forgot password”
**Next Issue:** #10

---

### Issue #10: Connect Login Page to API via Axios (JWT Flow)
**Labels:** feature, enhancement
**Description:**
Wire the login form to an authentication API using Axios. Implement JWT handling and error feedback.
**Checklist:**
- [ ] Create AuthService in `services/` using Axios
- [ ] Send login request & receive JWT/token
- [ ] Store token securely (localStorage)
- [ ] Handle errors and loading states
**Next Issue:** #11

---

### Issue #11: Implement Protected Routes & Persisted Auth State
**Labels:** feature
**Description:**
Add route protection so only authenticated users can access the main dashboard and sections.
**Checklist:**
- [ ] Create ProtectedRoute component
- [ ] Use context/auth state to check login
- [ ] Redirect unauthenticated users to Login
- [ ] Persist auth state on app reload
**Next Issue:** #12

---

### Issue #12: Setup Axios Interceptors for JWT Attach & Error Handling
**Labels:** enhancement
**Description:**
Configure Axios interceptors to automatically attach JWTs to requests and handle authentication errors globally.
**Checklist:**
- [ ] Add request interceptor for auth header
- [ ] Add response interceptor for common error handling (401, etc.)
- [ ] Integrate token refresh logic (basic version)
- [ ] Document interceptor usage
**Next Issue:** #13

---

### Issue #13: Implement Logout Flow & Navbar User Controls
**Labels:** feature, enhancement
**Description:**
Add user profile area to navbar/sidebar, including logout logic linked to context and JWT clearing.
**Checklist:**
- [ ] Add user controls to header/sidebar
- [ ] Implement logout function (token clear, redirect)
- [ ] Show username/avatar when logged in
- [ ] Test across protected pages
**Next Issue:** #14

---

### Issue #14: Design & Build Projects List Page (UI Only)
**Labels:** feature, learning
**Description:**
Layout the Projects page with a list/table of projects, including add/search/filter controls. Focus on UI only for now.
**Checklist:**
- [ ] Create ProjectsPage component
- [ ] Display dummy project data in a table/card list
- [ ] Add controls for add/remove/search/filter
- [ ] Style with Bootstrap and responsive layouts
**Next Issue:** #15

---

### Issue #15: Implement Project CRUD (API Integration)
**Labels:** feature, enhancement
**Description:**
Hook up the Projects list UI to API endpoints using Axios, enabling real Create, Read, Update, Delete actions.
**Checklist:**
- [ ] Update ProjectsPage to fetch/project list from API
- [ ] Implement add, edit, delete actions via modal/forms
- [ ] Sync UI state and show loading/errors
- [ ] Validate forms and reflect updates in UI
**Next Issue:** #16

---

### Issue #16: Build Tasks List & Task Details Page (UI Only)
**Labels:** feature, learning
**Description:**
Design the Tasks section, including a list of tasks per project and details view. Emphasize usability and structure.
**Checklist:**
- [ ] Create TasksPage and TaskDetailsPage components
- [ ] Layout task list by project
- [ ] Create dummy data and display cards or tables
- [ ] Add view/edit modal popover (UI only)
**Next Issue:** #17

---

### Issue #17: Implement Task CRUD & Assignment (API Integration)
**Labels:** feature, enhancement
**Description:**
Enable creating, updating, deleting, and assigning tasks through API, linking tasks to projects and users.
**Checklist:**
- [ ] Connect tasks list/detail UI to API endpoints
- [ ] Allow creating/editing task via modal
- [ ] Add task assignment to users/team
- [ ] Sync changes to UI and handle errors
**Next Issue:** #18

---

### Issue #18: Integrate Team Management UI (Listing, Add/Edit Members)
**Labels:** feature, learning
**Description:**
Create the Team page with the ability to view, add, and update team members. Focus initially on UI and modal flows.
**Checklist:**
- [ ] Build TeamPage component with member list
- [ ] Add modal/forms for adding/editing members
- [ ] Provide dummy user data and role display
- [ ] Connect UI to context for state management
**Next Issue:** #19

---

### Issue #19: Team Management API Integration & Roles
**Labels:** feature, enhancement
**Description:**
Connect Team UI to backend API endpoints. Implement role management (admin, member, etc) and team data flows.
**Checklist:**
- [ ] Hook team CRUD up to Axios services
- [ ] Enable invites and role changing via API
- [ ] Display roles and permissions
- [ ] Show errors/loading states
**Next Issue:** #20

---

### Issue #20: Dashboard Analytics – Basic Chart Integration (UI Only)
**Labels:** feature, learning
**Description:**
Add placeholder dashboard charts summarizing project/task/team stats using Chart.js or Recharts (dummy data for now).
**Checklist:**
- [ ] Design dashboard area and chart containers
- [ ] Integrate sample line/bar/pie charts
- [ ] Style and layout with Bootstrap
- [ ] Add chart legends and tooltips
**Next Issue:** #21

---

### Issue #21: Connect Dashboard Analytics to Real API Data
**Labels:** feature, enhancement
**Description:**
Fetch project/task/team statistics from APIs and display in dashboard charts. Handle loading and error states.
**Checklist:**
- [ ] Update dashboard charts to use live API stats
- [ ] Implement filtering by time/project/team
- [ ] Add total/summary stats to dashboard
- [ ] Document analytics logic
**Next Issue:** #22

---

### Issue #22: Polish UX – Toasts, Dialogs, and Loading States
**Labels:** enhancement, learning
**Description:**
Improve overall user experience with notification toasts (e.g., react-toastify), confirmation dialogs, and skeleton loaders.
**Checklist:**
- [ ] Add Toasts for actions (create, update, error, logout, etc.)
- [ ] Use modals/dialogs for confirmations
- [ ] Implement skeleton or spinner loaders where appropriate
- [ ] Refine accessibility with ARIA/titles
**Next Issue:** #23

---

### Issue #23: Responsive Design & Mobile Layouts
**Labels:** enhancement, learning
**Description:**
Optimize DevTaskFlow for mobile and tablet devices, using Bootstrap utilities and custom media queries where necessary.
**Checklist:**
- [ ] Test all pages/components on mobile viewport
- [ ] Refactor layouts as needed (sidebar collapse, modals, touch targets)
- [ ] Ensure charts and tables are mobile-friendly
- [ ] Document responsive choices in README
**Next Issue:** #24

---

### Issue #24: Refactor & Write TypeScript Types for All Major Entities
**Labels:** enhancement, learning
**Description:**
Define and use TypeScript types/interfaces for projects, tasks, users, teams, responses, and services.
**Checklist:**
- [ ] Create types for each core entity in `src/types/`
- [ ] Refactor components/services to strongly type props and state
- [ ] Add examples to README of custom types
- [ ] Address any type errors or warnings in eslint/tsc
**Next Issue:** #25

---

### Issue #25: Add Unit & Integration Tests (Jest + React Testing Library)
**Labels:** enhancement, learning
**Description:**
Demonstrate best practices by writing tests for key functionality (login, project CRUD, protected routes, context, etc.).
**Checklist:**
- [ ] Set up Jest and React Testing Library
- [ ] Write unit tests for context/services/helpers
- [ ] Write integration tests for major components
- [ ] Add coverage reporting and document in README
**Next Issue:** #26

---

### Issue #26: Final Code Cleanup & Lint Fixes
**Labels:** final, enhancement
**Description:**
Clean up codebase, run linter/formatter, and resolve any warnings for a production-ready release.
**Checklist:**
- [ ] Run ESLint and Prettier on all files
- [ ] Remove unused dependencies, files, and code
- [ ] Double-check all code comments and docs
- [ ] Finalize README and add usage instructions
**Next Issue:** #27

---

### Issue #27: Setup Deployment (Vercel/Netlify) and Environment Variables
**Labels:** setup, final
**Description:**
Prepare DevTaskFlow for deployment using Vercel, Netlify, or similar platforms. Configure environment variables for APIs.
**Checklist:**
- [ ] Configure project for deployment (build command, static files, etc.)
- [ ] Set up environment variable system (e.g., .env files)
- [ ] Write deployment guide in README
- [ ] Deploy app and test live version
**Next Issue:** #28

---

### Issue #28: Final Testing, Documentation, and Release
**Labels:** final, enhancement
**Description:**
Do a full pass of application testing and finalize documentation for end users and developers.
**Checklist:**
- [ ] Manual test all flows (auth, routing, CRUD, etc.)
- [ ] Review and finish all documentation (API, context, folder structure, contributing guide)
- [ ] Create a release on GitHub
- [ ] Announce/notify team or initial users
**Next Issue:** N/A (Roadmap Complete)