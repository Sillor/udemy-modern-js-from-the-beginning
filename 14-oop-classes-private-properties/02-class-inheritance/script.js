// Parent class
class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log('Name: ' + this.name);
    }
}

// Sub class
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);

        this.height = height;
        this.width = width;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);

        this.radius = radius;
    }

    logName() {
        console.log('Circle name: ' + this.name);
    }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const cir = new Circle('Circle 1', 20);
cir.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);