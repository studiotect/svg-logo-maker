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

  })
  describe("Triangle", () => {

  })


})