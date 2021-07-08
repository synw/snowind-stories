#!/usr/bin/env node

const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const prettier = require("prettier");
const path = require("path");
// bring in the Tailwind config
const tailwindConfig = require("../tailwind.config.js");

const { theme } = resolveConfig(tailwindConfig);
const colors = {
  primary: theme.colors.primary,
  primaryR: theme.colors['primary-r'],
  secondary: theme.colors.secondary,
  secondaryR: theme.colors['secondary-r'],
  neutral: theme.colors.neutral,
  neutralR: theme.colors['neutral-r'],
  light: theme.colors.light,
  lightR: theme.colors['light-r'],
  success: theme.colors.success,
  successR: theme.colors['success-r'],
  warning: theme.colors.warning,
  warningR: theme.colors['warning-r'],
  danger: theme.colors.danger,
  dangerR: theme.colors['danger-r'],
  background: theme.colors.background,
  backgroundR: theme.colors['background-r'],
  foreground: theme.colors.foreground,
  foregroundR: theme.colors['foreground-r'],
}
console.log("Exporting Snowind theme colors")
console.log(colors)

const themeStr = JSON.stringify(colors);
const js = `
const snowind  = ${themeStr}

export default snowind
`;

try {
  // write the file to src/theme.js after
  // having prettier format the string for us
  fs.writeFileSync(
    path.resolve(process.cwd(), ".storybook/snowind_theme.js"),
    prettier.format(js, { parser: "babel" }),
    "utf-8"
  );
} catch (err) {
  console.log(err.message);
}