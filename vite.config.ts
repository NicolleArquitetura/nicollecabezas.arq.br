import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // lovable-tagger só é carregado em desenvolvimento, para que o build de
  // produção (Cloudflare) não dependa de devDependencies.
  const devPlugins =
    mode === "development"
      ? [(await import("lovable-tagger")).componentTagger()]
      : [];

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), ...devPlugins],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
