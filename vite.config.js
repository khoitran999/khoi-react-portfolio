import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/khoi-react-portfolio/', // Add this for GitHub Pages

  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
