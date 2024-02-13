import svg from "@neodx/svg/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svg({
      root: "assets",
      output: "public",
      group: true,
      metadata: {
        path: "src/shared/ui/icon/sprite.gen.ts",
        runtime: {
          size: true,
          viewBox: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
