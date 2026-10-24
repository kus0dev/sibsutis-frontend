# Lab №6

## Task

**State management in React**

**Deadline:** 2 weeks from lecture 17.10, until 31.10 inclusive.

## Intro

Continue your project from Lab №5. Apply the tools to your topic: choose data, actions, and pages yourself.

## Grades

### "Satisfactory" (3)
- Redux Toolkit with React Redux or Zustand is connected.
- State needed by several components of the project is moved into the store: for example, settings, filters, or selected objects.
- Changing this state from the interface is implemented. At least two components use it and display changes consistently.
- The store is not recreated on render.
- Functionality from the previous lab is preserved.

### "Good" (4)
All conditions from ["Satisfactory"](#satisfactory-3) and:
- React Router is connected. At least two pages corresponding to the project tasks are created; each has its own address.
- Navigation via `Link` or `NavLink` works without reloading. Shared state is preserved between pages.
- Direct links to pages and browser "Back" and "Forward" buttons work. An unknown address is handled.
- Preserving state after a full browser reload is not required.

### "Excellent" (5)
All conditions from ["Good"](#good-4) and:
- RTK Query or TanStack Query is added to Redux Toolkit; TanStack Query is added to Zustand. React Router remains.
- All API requests in the project are moved to the chosen library: RTK Query or TanStack Query. `queries` are used for reading data, `mutations` for creating, updating, and deleting.
- Axios or `fetch` can be used as an HTTP client inside the request functions of the chosen library. Direct requests bypassing it are not allowed; the previous request logic via `useEffect` is replaced by query hooks.
- Requests are performed over HTTP. Loading, error, retry, and absence of data are handled.
- Request caching is used. On repeated access to the same data, behavior corresponds to the cache settings; this can be checked in the Network tab.
- One action of your topic is implemented via a mutation: creating, updating, or deleting data on the server. Pending and error states are shown, and repeated submission is blocked until completion.
- After a successful action, related data is updated via cache invalidation without reloading. API responses are not duplicated in the client store.

## Where to get API

- Ready public API: currently React accesses it directly. Later, in Node.js labs, you can add a server layer.
- Your own backend on Node.js: one route returning predefined data is enough.
- Backend on Java: you can use your project from Java courses. Later you can also add a Node.js layer.
