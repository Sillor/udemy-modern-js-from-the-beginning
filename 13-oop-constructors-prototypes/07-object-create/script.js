const rectanglePrototypes = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * (this.width * this.height);
    },
    isSquare: function () {
        return this.width === this.height;
    },
}

function createRectangle(height, width) {
    return Object.create(rectanglePrototypes, {
        height: {
            value: height
        },
        width: {
            value: width
        }
    });
}

const rect = createRectangle(20, 30);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(40, 30);
console.log(rect2.area());