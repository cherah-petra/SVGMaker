const inquirer = require("inquirer");
const { SVG, Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

const questions = [
  {
    type: "maxlength-input",
    name: "char",
    message: "Type your 3 character business name:",
    validate: function (input) {
      if (input.length !== 3) {
        return "Please enter exactly 3 characters";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textcolor",
    message: "Enter your text colour:",
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose the shape for your logo:",
    choices: ["Circle", "Triangle", "Square"],
  },

  {
    type: "input",
    name: "color",
    message: "Please choose color for your logo shape:",
  },
];

inquirer.prompt(questions).then((res) => {
  let shape;
  if (res.shape === "Circle") {
    shape = new Circle();
  }
  if (res.shape === "Triangle") {
    shape = new Triangle();
  }
  if (res.shape === "Square") {
    shape = new Square();
  }
  shape.setColor(res.color);

  const svg = new SVG();
  svg.setText(res.char, res.textcolor);
  svg.setShape(shape);

  return writeFile("./examples/logo.svg", svg.render())
    .then(() => {
      console.log("Generated logo.svg");
    })
    .catch((error) => {
      console.log("Something went wrong!");
      console.log(error);
    });
});
