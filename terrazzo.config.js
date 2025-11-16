import { defineConfig } from "@terrazzo/cli";
import pluginCSS from "@terrazzo/plugin-css";
import pluginJS from "@terrazzo/plugin-js";
import pluginSASS from "@terrazzo/plugin-sass";

export default defineConfig({
  tokens: ["./src/color-palette.json"],
  outDir: "./dist/",

  plugins: [
    pluginCSS({
      "legacyHex": true
    }), // generate .css files
    pluginJS({
      js: "index.js",
      ts: "index.d.ts",
      json: "token.json", // set to a filename to generate JSON
    }),
    pluginSASS({
      filename: "index.scss",
    }),
  ],

  lint: {
    rules: {
      // my lint rules
    },
  },
});