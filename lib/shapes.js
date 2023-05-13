class Shape {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}
class Circle extends Shape{
  constructor(name, textColor, shape, shapeColor) {
    super(name, textColor, shape, shapeColor)
  }
  makeLogo(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>
  
  </svg>`
  }
}
class Square extends Shape{
  constructor(name, textColor, shape, shapeColor) {
    super(name, textColor, shape, shapeColor)
  }
  makeLogo(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="50, 10 50, 190 250, 190 250, 10" fill="${this.shapeColor}"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>

    </svg>`
  }
}
class Triangle extends Shape{
  constructor(name, textColor, shape, shapeColor) {
    super(name, textColor, shape, shapeColor)
  }
  makeLogo(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
    <polygon points="50, 10 50, 190 250, 190 250, 10" fill="${this.shapeColor}"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>

    </svg>`
  }
}
module.exports = {Circle, Square, Triangle};
