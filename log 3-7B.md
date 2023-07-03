# Learning Log

### 3-7-23B

Quick refresher with mapping through an array:

import "./App.css";

const cats = [
  {
    name: "Terry",
    type: "cat",
    price: 45,
  },
  {
    name: "Berry",
    type: "banana",
    price: 18,
  },
  {
    name: "Sally",
    type: "leaf",
    price: 7,
  },
];

const Cat = () => {
  return (
    <div>
      {cats.map(function (cats) {
        return (
          <div>
            <h2>Name: {cats.name}</h2>
            <h3>Type: {cats.type}</h3>
            <h3>Age: {cats.age}</h3>
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Cat />
    </div>
  );
}

export default App;

==========================

Using spread operator for the return:

import "./App.css";

const cats = [
  {
    name: "Terry",
    type: "cat",
    price: 45,
  },
  {
    name: "Berry",
    type: "banana",
    price: 18,
  },
  {
    name: "Sally",
    type: "leaf",
    price: 7,
  },
];

const Cat = () => {
  return (
    <div>
     {cats.map(cat=> <Cat{...cats}/>)}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Cat />
    </div>
  );
}

export default App;


