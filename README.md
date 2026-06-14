# AI & Robotics Summer Workshop Landing Page (RoboCamp)

A premium, fully responsive, child-friendly full-stack application built using React (TypeScript + Tailwind CSS) and Express (TypeScript) in a unified workspace, modeled after the style of **kidrove.com**.

## Project Structure

```
/ (Workshop Root)
├── package.json               # Unified scripts & node modules
├── tsconfig.json              # TypeScript root rules
├── vite.config.ts             # Vite configuration with API proxy
├── tailwind.config.js         # Custom branding colors & typography
├── index.html                 # Frontend client entry
├── .env                       # Local environment variables
├── README.md                  # Unified run & dev guide
└── src/
    ├── main.tsx               # Client React app mounting
    ├── App.tsx                # Client Layout assembler
    ├── index.css              # Custom font imports & core styles
    ├── components/            # Reusable React components
    │   ├── Header.tsx         # Responsive sticky header
    │   ├── Hero.tsx           # Engaging hero section with animated robot
    │   ├── Details.tsx        # Details card grid with dynamic colors
    │   ├── Outcomes.tsx       # Key takeaways & Explorer Badge
    │   ├── FAQ.tsx            # Collapsible accordion UI
    │   ├── Form.tsx           # Validation form (relies on relative path proxy)
    │   └── Footer.tsx         # Dark brand footer & social SVGs
    └── server/                # Express backend component
        ├── config/db.ts       # MongoDB connection driver
        ├── models/Enquiry.ts  # Enquiry Mongoose Schema
        ├── routes/enquiry.ts  # Enquiry API routes with TS validation
        └── server.ts          # Server entry (serves React statically in production)
```

---

## Setup & Running Instructions

### 1. Installation
In the project root directory, install the required packages:
```bash
npm install
```
*(Runs with peer dependencies resolution checks. Uses standard packages).*

### 2. Run in Development Mode
To start both the Express backend server (port 5000) and the Vite React frontend (port 5173) concurrently, run:
```bash
npm run dev
```
- Open `http://localhost:5173` to view the page.
- The React application is configured to proxy all `/api/*` endpoints to the Express server running on port 5000.
- If no `MONGO_URI` is supplied in the `.env` file, the server defaults to **Mock/In-Memory Mode**, printing submissions in the console and saving them to an in-memory array.

### 3. Build & Run in Production Mode
To compile the TypeScript server files and bundle the React frontend assets, run:
```bash
npm run build
```
- The React frontend builds to `dist/client/`.
- The Express server compiles to `dist/server/`.
- Once built, start the production Express server:
```bash
npm run start
```
- Open `http://localhost:5000` to access the page (Express will serve the built React files statically).

---

## API Specification

### **POST** `/api/enquiry`
Submits a registration enquiry.

* **Headers**: `Content-Type: application/json`
* **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "9876543210"
  }
  ```
* **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Enquiry submitted successfully! Saved to Database.",
    "data": {
      "id": "6472b53...",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phone": "9876543210",
      "createdAt": "2026-06-14T13:00:00.000Z"
    }
  }
  ```
* **Error Response (400 Bad Request)**:
  ```json
  {
    "success": false,
    "message": "Validation failed. Please correct the fields below.",
    "errors": {
      "email": "Please provide a valid email address.",
      "phone": "Please provide a valid 10-digit Indian phone number (starts with 6-9)."
    }
  }
  ```

---

## Approach and Future Improvements

### Approach
I modeled the landing page after the clean, visual, and highly interactive aesthetic of kidrove.com. The design utilizes high-contrast custom brand colors (indigo/base, warm orange CTAs, mint checkmarks, pink/yellow accents) and organic, highly rounded cards (`rounded-3xl`) to establish a fun and modern child-friendly look. Interactivity is introduced through CSS floating animations, chevron rotation toggles on the FAQ accordion, smooth auto-scroll to the registration section, and real-time inputs validation.

For the backend, Express was structured in TypeScript to match the frontend safety level. I engineered a dual-mode repository; the backend automatically checks for the existence of `MONGO_URI`, dynamically falling back to an in-memory mock repository if no database is running. This makes testing local deployments quick and error-proof.

### Future Improvements (Given More Time)
1. **Interactive Sandbox Preview**: Embed a live mini-block coding widget on the frontend so kids can test-drive programming a virtual robot right on the landing page before registering.
2. **Authentication & Student Portal**: Create parent/student login panels using JWT, allowing registered users to access lecture recordings, simulator tools, and complete coding assignments.
3. **Counselor Dashboard**: Build an admin CRM panel on the backend that logs all incoming enquiries, allows counselors to update enquiry status (e.g., "Contacted", "Enrolled", "Callback requested"), and assign slots.
4. **Email Confirmation Trigger**: Hook up SendGrid or Nodemailer to dispatch a welcome email and camp info booklet to parents upon successful form submission.
