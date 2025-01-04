import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";
import AutoImport from "unplugin-auto-import/vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("package"),
    },
  },
  plugins: [
    vue(),
    ElementPlus({}),
    AutoImport({ imports: ["vue"], dts: true }),
    dts({
      entryRoot: "package",
      outDir: "es",
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    target: "modules",
    outDir: "es",

    rollupOptions: {
      external: ["hls.js"],
      input: ["./package/index.ts"],
      output: [
        {
          format: "es",
          dir: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "package",
        },
      ],
    },

    lib: {
      entry: resolve(__dirname, "package/index.ts"),
      formats: ["es"],
    },
  },
});
