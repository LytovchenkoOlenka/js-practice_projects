import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Головна сторінка (твоє навігаційне меню)
        main: resolve(__dirname, "index.html"),

        // Сторінка твого міні-проєкту "Order Processing App"
        // Шлях від кореня проєкту до файлу index.html всередині папки order-processing-app
        orderApp: resolve(__dirname, "src/order-processing-app/index.html"),

        // !!! Якщо ти будеш додавати нові міні-проєкти,
        // !!! тобі потрібно буде додати їх HTML-файли сюди:
        // newProject: resolve(__dirname, 'src/new-project-folder/index.html'),
      },
    },
  },
  // Якщо тобі потрібні інші налаштування Vite (наприклад, для hot module replacement, плагіни тощо),
  // їх можна додавати тут. Наразі, для MPA цього достатньо.
});
