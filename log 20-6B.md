# Learning Log

### 20/6/23

### Generics


const addUID = (obj: object) => {
    let uid = Math.floor(Math.random()* 100);
    return{...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40})

console.log(docOne);  // This works

console.log(docOne.name)  // This doesnt!!



This doesnt know there is a name or an age or any other property that we passed into the addUID function.

We use a GENERIC <T> for this...like so

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random()* 100);
    return{...obj, uid};
}

This captures what properties ready for returning.

// with interfaces

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resouce<object> = {    // this is fine
    uid: 1,
    resourceName: 'person',
    data: {name: 'timmy'}
}

const docFour: Resource<String[]> {   // This is fine too
    uid: 3,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
}
