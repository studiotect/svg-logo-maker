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
    it("Test all parameters of square", () => {
      const circle = new Square("jgt", "black", "square", "green")
      expect (circle.name).toEqual("jgt")
      expect (circle.textColor).toEqual("black")
      expect (circle.shape).toEqual("square")
      expect (circle.shapeColor).toEqual("green")
    })
  })
  describe("Triangle", () => {
    it("Test all parameters of triangle", () => {
      const circle = new Triangle("jgt", "black", "triangle", "green")
      expect (circle.name).toEqual("jgt")
      expect (circle.textColor).toEqual("black")
      expect (circle.shape).toEqual("triangle")
      expect (circle.shapeColor).toEqual("green")
    })
  })


})