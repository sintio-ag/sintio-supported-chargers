import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePluginRadar } from "vite-plugin-radar";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      ViteImageOptimizer(),
      VitePluginRadar({
        // Google Analytics tag injection
        analytics: {
          id: env.VITE_GOOGLE_ANALYTICS_ID,
        },
      }),
    ],
    base: env.VITE_GHPAGES_REPO_NAME,
  };
});
