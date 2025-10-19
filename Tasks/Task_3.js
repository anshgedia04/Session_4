

class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Triangle subclass
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}


const circle = new Circle(5);
console.log(`Circle with radius ${circle.radius}:`);
console.log(`Area = ${circle.calculateArea().toFixed(2)}`);


const triangle = new Triangle(10, 8);
console.log(`\nTriangle with base ${triangle.base} and height ${triangle.height}:`);
console.log(`Area = ${triangle.calculateArea().toFixed(2)}`);

