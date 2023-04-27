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
    name: "textColor"
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
    name: "shapeColor"
  }
])
  .then((res) => {
    // console.log(res.name, res.textColor, res.shape, res.shapeColor)
    // fs.writeFileSync("logo.svg", generateLogo(res))
    console.log(res)
    const logo = makeLogo(res)
    console.log(logo)
    // Save to file
  })

  const makeLogo = (res) => {
    let custShape

    if (data.shape === "circle") {
      custShape = makeCircle(data.shapeColor)
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${custShape}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">SVG</text>
  
  </svg>`
  }

const makeCircle = (color) => {
  return `<circle cx="150" cy="100" r="80" fill="${color}" />`
}