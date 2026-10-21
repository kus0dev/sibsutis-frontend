# Fourier Lens

## Lab 5 - API Integration

This project demonstrates working with APIs in React by connecting to a backend service and displaying shape data.

## Stack

### Client (Frontend)
- **Build Tool:** Vite
- **Core:** React (Functional Components, Hooks)
- **Styling:** Native CSS (Flexbox/Grid)
- **Networking:** Axios

### Server (Backend)
- **Runtime:** Node.js
- **Framework:** Express
- **Database:** In-Memory Array
- **Utilities:** Cors

## Architecture

```text
/fourier-lens
├── /client
│   ├── /src
│   │   ├── /api            # API client and request functions
│   │   ├── /components
│   │   ├── /hooks          # Custom hooks
│   │   ├── /shared         # Shared components
│   │   ├── /utils
│   │   └── App.jsx
│   └── vite.config.js
│
└── /server
    ├── index.js            # Express server + API routes
    └── package.json
```
