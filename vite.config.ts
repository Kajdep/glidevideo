import fs from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";

function loadPublicConfig() {
  try {
    const envConfig = JSON.parse(
      fs.readFileSync("./env.json", "utf8"),
    ) as Record<string, string>;

    return Object.fromEntries(
      Object.entries(envConfig).filter(([key]) => key.startsWith("PUBLIC_")),
    );
  } catch {
    return {};
  }
}

export default defineConfig(() => ({
  plugins: [
    nodePolyfills({
      include: ["stream", "crypto", "process"],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
    react(),
  ],
  define: {
    __PUBLIC_CONFIG__: JSON.stringify(loadPublicConfig()),
  },
  build: {
    assetsDir: "_assets",
  },
}));
