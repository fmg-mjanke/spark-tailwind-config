import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import colors from "../../build/colors.js";

type ColorValue = string;
type ColorSet = Record<string, ColorValue>;
type Colors = Record<string, ColorValue | ColorSet>;

/**
 * Color palette display for the design system
 */
const ColorPalette = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Color Palette</h1>
      {Object.entries(colors as Colors).map(([colorName, colorSet]) => {
        if (typeof colorSet === "string") {
          return (
            <div key={colorName} className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded shadow"
                style={{ backgroundColor: colorSet }}
              />
              <div>
                <div className="font-medium">{colorName}</div>
                <div className="text-sm opacity-70">{colorSet}</div>
              </div>
            </div>
          );
        }

        return (
          <React.Fragment key={colorName}>
            <h2 className="text-xl font-semibold mt-6 mb-3">{colorName}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(colorSet as ColorSet).map(([shade, value]) => (
                <div
                  key={`${colorName}-${shade}`}
                  className="flex flex-col gap-1"
                >
                  <div
                    className="w-full h-16 rounded shadow"
                    style={{ backgroundColor: value }}
                  />
                  <div className="text-sm font-medium">{shade}</div>
                  <div className="text-xs opacity-70">{value}</div>
                </div>
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const meta = {
  title: "Design System/Colors",
  component: ColorPalette,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
