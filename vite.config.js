import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dice_roll/", // Replace with your GitHub repository name
  plugins: [react()],
});
