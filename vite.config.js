import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Головна сторінка (твоє навігаційне меню)
        main: resolve(__dirname, "index.html"),
        orderApp: resolve(__dirname, "src/order-processing-app/index.html"),

        // !!! Якщо ти будеш додавати нові міні-проєкти,
        // !!! тобі потрібно буде додати їх HTML-файли сюди:
        // newProject: resolve(__dirname, "src/01-JS30-Drum-Kit/drum-kit.html"),
        // newProject: resolve(__dirname, "src/02-JS30-Clock/clock.html"),
      },
    },
  },
  // Якщо тобі потрібні інші налаштування Vite (наприклад, для hot module replacement, плагіни тощо),
  // їх можна додавати тут. Наразі, для MPA цього достатньо.
});
