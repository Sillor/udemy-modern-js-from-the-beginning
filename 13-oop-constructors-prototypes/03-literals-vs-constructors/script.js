const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing - adding a wrapper object onto a literal
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing - turning object back into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());


console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

const funcLit = function (x) {
    return x * x;
}

console.log(funcLit, typeof funcLit);

const funcObj = new Function('x', 'return x * x');

console.log(funcObj(3));

const obj1 = {};
const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);