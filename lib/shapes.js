function generateLogo(res){
  console.log({res})
}
class Shape {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  makeLogo = (res) => {
    if (this.shape === "circle") {
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${name}</text>
    
    </svg>`
    }
    else if (this.shape === "square"){
     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="50, 10 50, 190 250, 190 250, 10" fill="${shapeColor}"/>

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${name}</text>

      </svg>`
    }
    else if (this.shape === "triangle"){
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
       <polygon points="50, 10 50, 190 250, 190 250, 10" fill="${shapeColor}"/>
 
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${name}</text>
 
       </svg>`
     }

  }
}
module.exports = generateLogo;


  if (data.shape === "circle") {
    custShape = makeCircle(data.shapeColor)
  }

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${custShape}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">SVG</text>

</svg>`
}

const makeCircle = (color) => {
return `<circle cx="150" cy="100" r="80" fill="${color}" />`
}