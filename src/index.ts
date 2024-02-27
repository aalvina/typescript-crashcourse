// Basic Types
let id: number = 51
let company: string = 'john'
let isPublished: boolean = true
let x: any = 'Hello' // Assigning a different type to this variable will not cause an error.

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jane'],
]

// Union            /* This type can have more than one type. */
let pid: string | number
pid = 22

// Enum
enum Direction1 {
    Up = 5,
    Down,
    Left = 1,
    Right
}
console.log(Direction1.Up)    // 0
console.log(Direction1.Down)  // 1
console.log(Direction1.Left)  // 2
console.log(Direction1.Right) // 3

enum Direction2 {
    Up = 'Up',      // Up
    Down = 'Down',  // Down
    Left = 'Left',  // Left
    Right = 'Right' // Right
}

// Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number // Another way to do Type Assertion

// Functions
function addNum(x: number, y: number): number { // The 3rd "number" specifies that the return value is also a number
    return x + y
}

console.log('addNum: ', addNum(1, 2))

// Void 
function log(message: string | number): void {
    console.log(message)
}

log('Hello World!')

//
// Interfaces
interface UserInterface {
    readonly id: number // Cannot assign a new value to id
    name: string
    age?: number // Optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// Using an interface with a function
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y
console.log('add: ', add(10, 5))
console.log('sub: ', sub(10, 5))

//
// Classes

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string
    // public is the default access modifier

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    // Function inside a class
    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

console.log(brad, mike)
console.log(brad.register())

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn Michaels', 'Developer')
console.log(emp)
console.log(emp.register())

//
// Generics             /* Basically used to build reusable components */
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Brad', 'John', 'Jane'])

// numArray.push('a string')    /* This will cause an error because we specified numArray should only accept a number. */
