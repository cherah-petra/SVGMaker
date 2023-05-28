class Shape {
    constructor() {
        this.color ="";
    }
 setColor(colorVar) {
    this.color = colorVar;
 }   
}

class Rectangle extends Shape {
    render() {
        return <rect x="10" y="10" width="300" height="200" fill="${this.color}" />;
    }
}

class Circle extends Shape {
    render() {
        return <circle cx="25" cy="75" r="200" fill="${this.color}"/>;
    }
}

class Triangle extends Shape {
    render() {
        return <polygon points="0,0 100,0 50,100" fill="${this.color}"/>
    }
}

module.exports = { Rectangle, Circle, Triangle };