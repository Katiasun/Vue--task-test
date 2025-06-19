# Vue-task

This template should help get you started developing with Vue 3 in Vite.

---

## About the Project

This project is a web application example built with **Vue 3** and **Vite**. It demonstrates the development of various UI components, state management, routing, and integration with third-party libraries like Swiper.

---

## Key Features & Components

- **Dynamic Game Sliders:**
  - Implemented using **Swiper.js** for Vue.
  - Supports multiple independent slider instances on the same page, each with its own navigation elements.
  - Demonstrates parent-child component integration via props and emits (`GamesSlider`, `GameItem`).
- **Game & Promotion Cards:**
  - `GameItem` and `ItemPromo` components offer flexible display for game cards and promotional offers.
  - **`GameItem`** includes functionality for adding/removing games from "Favorites."
  - **`ItemPromo`** supports various display modes (title only, detailed description, full information) based on context.
- **Modal Windows (Popups):**
  - Centralized modal window management using the **`usePopup` composable**.
  - Ensures easy opening/closing of popups from any component.
- **Navigation & Routing:**
  - Utilizes **Vue Router** to manage routes between pages.
  - Features a side menu (`TheSideMenu`) and header (`TheHeader`) with dynamic links and toggle logic.
  - Includes a "404 Not Found" page for non-existent routes.
- **Composable Functions (Composables):**
  - Demonstrates code reusability through custom composables like `useCounter` and `useLogLifecycle`.
- **Static Asset Management:**
  - Improved approach to importing and using SVG images (e.g., for payment system icons) for optimized build processes.

---

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

---

## Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/).

---

## Project Setup

```sh
npm install
```
