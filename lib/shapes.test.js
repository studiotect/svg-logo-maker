const {Circle, Square, Triangle} = require("./shapes");

describe("Shape", () => {

  describe("Circle", () => {
    it("Test all parameters of circle", () => {
      const circle = new Circle("jgt", "black", "circle", "green")
      expect (circle.name).toEqual("jgt")
      expect (circle.textColor).toEqual("black")
      expect (circle.shape).toEqual("circle")
      expect (circle.shapeColor).toEqual("green")
    })
  })
  
  describe("Square", () => {
    it("should initialize Square object with given parameters", () => {
      const square = new Square("abc", "blue", "square", "red");
      expect(square.name).toEqual("abc");
      expect(square.textColor).toEqual("blue");
      expect(square.shape).toEqual("square");
      expect(square.shapeColor).toEqual("red");
    });
  });

  describe("Triangle", () => {
    it("should initialize Triangle object with given parameters", () => {
      const triangle = new Triangle("xyz", "yellow", "triangle", "purple");
      expect(triangle.name).toEqual("xyz");
      expect(triangle.textColor).toEqual("yellow");
      expect(triangle.shape).toEqual("triangle");
      expect(triangle.shapeColor).toEqual("purple");
    });
  });
});