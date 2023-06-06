const { SVG, Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
    test("should render a blue circle", () => {
        const expected = '<circle cx="150" cy="100" r="80" fill="purple"/>'
        const test = new Circle()
        test.setColor("purple")
        const output = test.render();
        expect(output).toEqual(expected)
    });
    test("should render a red circle", () => {
        const expected = '<circle cx="150" cy="100" r="80" fill="red"/>'
        const test = new Circle()
        test.setColor("red")
        const output = test.render();
        expect(output).toEqual(expected)
    })
});

describe("Triangle", () => {
    test("should render a blue Triangle", () => {
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        const test = new Triangle()
        test.setColor("blue")
        const output = test.render();
        expect(output).toEqual(expected)

    })
});

describe("Square", () => {
    test("should render a yellow Square", () => {
        const expected = '<rect x="40" y="40" width="200" height="200" fill="yellow" />'
        const test = new Square()
        test.setColor("yellow")
        const output = test.render();
        expect(output).toEqual(expected)

    })
})
