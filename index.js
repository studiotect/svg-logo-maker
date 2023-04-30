const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const {Circle, Square, Triangle} = require("./lib/shapes");

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
    if (res.shape === "circle"){
      const circle = new Circle (res.name, res.textColor, res.shape, res.shapeColor)
      fs.writeFileSync("logo.svg", circle.makeLogo());
    } else if (res.shape === "square"){
      const square = new Square (res.name, res.textColor, res.shape, res.shapeColor)
      // square.makeLogo();
      fs.writeFileSync("logo.svg", square.makeLogo());
    } else if (res.shape === "triangle"){
      const triangle = new Triangle (res.name, res.textColor, res.shape, res.shapeColor)
      // triangle.makeLogo();
      fs.writeFileSync("logo.svg", triangle.makeLogo());
    }
  }
);

