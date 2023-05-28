const inquirer = require("inquirer")
console.log('Hello');
var colorList = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia"]

const questions = [

    {
        type: "maxlength-input",
        name: "char",
        message: "Type your 3 character business name:",
        validate: function (input) {
            if (input.length !==3) {
                return 'Please enter exactly 3 characters';
            }
            return true
        }
    },
    {
        type: "input",
        name: "textcolor",
        message: "Enter your text colour:"
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose the shape for your logo:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "color",
        message: "Please choose color for your logo shape:",
        default: () => {},
        validate: function (color) {
  
            valid = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
            for (let i=0;i< colorList.length;i ++){
                if (color==colorList[i]) {
                    valid2 = true;
                } else {
                    valid2 = false;
                }
            }
            if (valid||valid2) {
              console.log("Great job");
                return true;
            } else {
                console.log("Please enter a valid color")
                return false;
            }
        }
    }
]


// /*rectangle*/

// <rect x="10" y="10" width="30" height="30"/>
// <rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>

// /*circle*/

// <circle cx="25" cy="75" r="20"/>

// /*triangle*/

// <polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
