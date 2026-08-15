#!/usr/bin/env node
const tailwindcss = require('tailwindcss');
const postcss = require('postcss');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src/input.css');
const outputFile = path.join(__dirname, 'output.css');

const css = fs.readFileSync(inputFile, 'utf8');

postcss([tailwindcss('./tailwind.config.js')]).process(css, { from: inputFile, to: outputFile }).then(result => {
  fs.writeFileSync(outputFile, result.css);
  console.log('CSS built successfully!');
}).catch(err => {
  console.error('Error building CSS:', err);
  process.exit(1);
});
