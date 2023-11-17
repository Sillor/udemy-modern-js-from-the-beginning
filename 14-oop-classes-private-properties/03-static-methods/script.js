class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  static getClass() {
    return 'Rectangle';
  }
}

console.log(Rectangle.getClass());