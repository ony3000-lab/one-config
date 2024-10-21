import { cpSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/eslint-base.ts"),
        resolve(__dirname, "src/prettier-base.ts"),
      ],
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["eslint", "prettier"],
    },
  },
  plugins: [
    dts(),
    {
      name: "copy-tsconfig",
      writeBundle(options, bundle) {
        cpSync(
          resolve(__dirname, "src/tsconfig-base.json"),
          resolve(__dirname, "dist/tsconfig-base.json"),
        );
      },
    },
  ],
});
