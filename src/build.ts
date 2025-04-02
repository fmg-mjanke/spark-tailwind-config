import { register } from "@tokens-studio/sd-transforms";
import { StyleDictionary } from "style-dictionary-utils";
import path from "path";
// Register the tokens-studio transforms
register(StyleDictionary);

/**
 * Process primitive color tokens from Figma export
 * Converts the Design Tokens Manager format to a JavaScript module
 */
const processPrimitiveColors = () => {
  return new StyleDictionary({
    preprocessors: ["tokens-studio"],
    source: ["tokens/Primitives - Colors.Mode 1.tokens.json"],
    platforms: {
      ts: {
        transformGroup: "js",
        files: [
          {
            format: "javascript/esm",
            destination: "build/colors.js",
            options: {
              stripMeta: true,
            },
          },
          {
            format: "typescript/esm-declarations",
            destination: "build/colors.d.ts",
          },
        ],
      },
    },
  });
};

async function main() {
  console.log("⚙️ Processing color tokens from Figma...");
  await processPrimitiveColors().buildAllPlatforms();
  console.log(
    "✅ Color tokens processing complete! Output files created in the build directory."
  );
}

main().catch(console.error);
