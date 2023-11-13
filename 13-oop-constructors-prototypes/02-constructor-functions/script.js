function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    }
};

const rect1 = new Rectangle('Rectangle 1', 20, 30);
console.log(rect1);


const rect2 = new Rectangle('Rectangle 2', 20, 10);
const rect3 = new Rectangle('Rectangle 3', 30, 30);

console.log(rect1.name, rect2.name);
console.log(rect1.area(), rect2.area());



console.log(rect1 instanceof Rectangle);