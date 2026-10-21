# Lab №5

## Task

**Working with API in React**

**Deadline:** 2 weeks from lecture 10.10, until 24.10 inclusive.

## Intro

Continue the React application on the chosen topic from Lab №4. Connect an API and display the received data in the interface. The book catalog from the lecture is an example: use entities from your project.

## Grades

### "Satisfactory" (3)
- Data is obtained by a real HTTP request to the API via `fetch` or Axios, for example by a button.
- The result is saved in `useState` and displayed as a list of components via `map` with a stable `key`.
- During the request, a loading indicator is visible; repeated launch by the button is temporarily unavailable.

### "Good" (4)
All conditions from ["Satisfactory"](#satisfactory-3) and:
- Loading starts when the page opens via `useEffect`; dependencies are chosen consciously, no infinite request repetitions.
- Error and successful response with an empty list are handled. After an error, the request can be retried without reloading the page.
- Request functions are moved out of the component into a separate API module.
- All requests go through a single HTTP client: a common `fetch` function or an Axios instance. Base URL and common headers are set in one place.

### "Excellent" (5)
All conditions from ["Good"](#good-4) and:
- A custom hook is created, e.g. `useBooks`: it stores data and loading status, starts the request and returns a `reload` function for retry. The component uses the hook and displays the result.
- The single HTTP client is implemented on Axios: an instance with common settings is created and interceptors are connected.
- Request-interceptor logs the method and address of each request to the console.

## Where to get API

- Ready public API: currently React accesses it directly. Later, in Node.js labs, you can add a server layer.
- Your own backend on Node.js: one route returning predefined data is enough.
- Backend on Java: you can use your project from Java courses. Later you can also add a Node.js layer.

## On defense

Show the application working and explain the data path from API to interface. For grade 4 or 5, demonstrate loading, error, retry, and empty list. For grade 5, explain the difference between a custom hook and a regular function and the rules of calling hooks.

If Axios is used, explain why you chose it over `fetch` and which of its features the project uses. For grade 5, also explain the purpose of the connected interceptors.
