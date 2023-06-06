class Shape {
    constructor() {
      this.color = "";
    }
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="40" y="40" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
  }
  
  class SVG {
    constructor() {
      this.shape = "";
      this.text = "";
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
  
    setText(textValue, textColor) {
      if (textValue.length < 3) {
        throw new Error("Text must be 1-3 characters");
      } else {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textValue}</text>`;
      }
    }
  
    setShape(shapeValue) {
      this.shape = shapeValue.render();
    }
  }
  
  module.exports = { Square, Circle, Triangle, SVG };
  