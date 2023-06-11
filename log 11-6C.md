# Learning Log

### 11/6/23

### Type aliases 

define a type to be re-used in order to avoid repeating code.. DRY

type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

type objWithName = {name: string, uid: StringOrNum}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello!`)
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello!`)
}

We use the defined type over and over again without needing to define the type over and over.