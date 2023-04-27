const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const generateLogo = require("./lib/shapes");

inquirer.prompt([
  {
    type: "input",
    message: "Enter up to three charaters for your logo?",
    name: "name"
  },
  {
    type: "input",
    message: "Enter a color keyword (OR a hexadecimal number) for the text:",
    name: "text-color"
  },
  {
    type: "list",
    message: "Select a shape?",
    name: "shape",
    choices: ["circle", "square", "triangle"]
  },
  {
    type: "input",
    message: "Enter a color keyword (OR a hexadecimal number) for the shape:",
    name: "shape-color"
  },
  .then((res) => {
    console.log(res.name, res.text-color, res.shape, res.shape-color)
    fs.writeFileSync("logo.svg", generateLogo(res))
])