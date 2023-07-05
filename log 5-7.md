# Learning Log

### 5-7-23


# Function closures re-cap

JS uses lexical scoping. Functions are excecuted using the variable scope that was in effect
when they were defined, not the veriable scope that is in effect when they are invoked.

In order to invoke lexical scoping, the internal state of a JS function object MUST include 
not only the code of the function but ALSO a reference to the scope in which the function
definition appears. 

** This combination of a function object and a scope (a set of variable bindings) in which the
function is resolved is called a CLOSURE in the CS literature. **

Tevhnically, all JS functions are closures, but because most functions are invoked in the same scope
that they are defined in, it normally really doesnt matter that there is closure involved.




let scope = "global scope";
function checkscope() {
  let scope ="local scope";
  function f() { return scope; }
  console.log(`In here the scope is ${scope}`)
return f();
}

checkscope();

console.log(`the scope out here is ${scope}`);

