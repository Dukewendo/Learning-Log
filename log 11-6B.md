# Learning Log

### 10/6/23

### Function basics

// ? as an optional parameter with a default parameter
// if one isnt included

let newFunction: Function;

let newFunction = () => {
    console.log('Hola);
}

const add = (a: number, b: number, c?: number | string = 10) => {
console.log(a+ b);
}

add(5, 10);

const minus = (a: number, b: number) => {
    return a - b
}

let result = minus(10, 7)

//TS infers the return type
// we dont need to specify the return type
// like this


const minus = (a: number, b: number): number => {
    return a - b
}

//TS automatically infers, but you can set it if you want to


