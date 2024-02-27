"use strict";
let id = 51;
let company = 'john';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jane'],
];
let pid;
pid = 22;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 1] = "Left";
    Direction1[Direction1["Right"] = 2] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function addNum(x, y) {
    return x + y;
}
console.log('addNum: ', addNum(1, 2));
function log(message) {
    console.log(message);
}
log('Hello World!');
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log('add: ', add(10, 5));
console.log('sub: ', sub(10, 5));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');
console.log(brad, mike);
console.log(brad.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn Michaels', 'Developer');
console.log(emp);
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jane']);
