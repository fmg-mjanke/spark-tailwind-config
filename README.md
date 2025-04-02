# Spark Design Tokens Manager

A toolkit for extracting Figma design tokens and converting them into usable JavaScript modules for your projects.

## What is Style Dictionary?

[Style Dictionary](https://amzn.github.io/style-dictionary/) is an open-source tool that allows you to define design tokens once and transform them into multiple formats for various platforms and languages. It helps maintain design consistency across your applications by:

- Creating a single source of truth for design tokens
- Automating the transformation of tokens into platform-specific formats
- Supporting various output formats (CSS, JavaScript, iOS, Android, etc.)
- Providing an extensible system for custom transformations

## How It Works

This project follows a simple workflow:

1. **Extract tokens from Figma** using the Design Tokens Manager plugin
2. **Transform tokens** using Style Dictionary
3. **Use the tokens** in your application

## Project Structure

```
spark-tailwind-config/
├── build/               # Output directory for generated files
├── src/                 # Source code for build scripts
├── tokens/              # Design tokens exported from Figma
└── package.json         # Project configuration
```

## Getting Started

### Prerequisites

- Node.js 14 or higher
- Figma account with access to the design files
- [Design Tokens Manager](https://www.figma.com/community/plugin/1263743870981744253/design-tokens-manager) plugin installed in Figma

### Installation

```bash
npm install
```

## Usage

### Step 1: Extract Tokens from Figma

1. Open your Figma design file
2. Launch the Design Tokens Manager plugin (Menu → Plugins → Design Tokens Manager)
3. Export as JSON tokens
4. Save the exported JSON files to the `tokens` directory in this project


### Step 2: Build the JavaScript Modules

Run the build command to process the tokens:

```bash
npm run build
```

This command:
- Reads the token files from the `tokens` directory
- Transforms them using Style Dictionary
- Outputs JavaScript modules to the `build` directory

### Step 3: Use the Generated Files

The build process creates files:
- `build/colors.js` - JavaScript ES module with primitive color tokens


Import and use these files in your project:

```javascript
import colors from 'path/to/build/colors.js';

// Example usage
const primaryColor = colors.atlantic[500]; // #0d1867
```

## Learn More

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Design Tokens Manager Plugin](https://www.figma.com/community/plugin/1263743870981744253/design-tokens-manager)
