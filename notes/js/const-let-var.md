## Var, Let, Const

| | var | let | const |
-|-|-|-
Global scope | :white_check_mark: | :white_check_mark: | :white_check_mark:
Function scope | :white_check_mark: | :white_check_mark: | :white_check_mark:
Block scope | | :white_check_mark: | :white_check_mark:
Redeclare variable | :white_check_mark: | |
Update variable | :white_check_mark: | :white_check_mark: |
Must assign a value when declare | | | :white_check_mark:
Hoisting | Hoisted to the top <br> Initialised as undefined | Hoisted to the top <br> Not initialised | Hoisted to the top <br> Not initialised

**Global scope**
Variables can be accessed from anywhere in a JavaScript program.
```javascript
var exampleVar = "hello var";
let exampleLet = "hello let";
const exampleConst = "hello const";

// can use exampleVar, exampleLet and exampleConst here

function myFunction() {
  // can use exampleVar, exampleLet and exampleConst here
}
```

**Function scope**
Variables can only be accessed from inside the function where they are declared.
```javascript
// cannot use exampleVar, exampleLet and exampleConst here

function myFunction() {
  var exampleVar = "hello var";
  let exampleLet = "hello let";
  const exampleConst = "hello const";
  // can use exampleVar, exampleLet and exampleConst here
}

// cannot use exampleVar, exampleLet and exampleConst here
```

**Block scope**
Variables can only be accessed from inside the block **{}** where they are declared.
```javascript
// can use exampleVar
// cannot use exampleLet and exampleConst here

if (true) {
  var exampleVar = "hello var";
  let exampleLet = "hello let";
  const exampleConst = "hello const";
  // can use exampleVar, exampleLet and exampleConst here
}

// can use exampleVar
// cannot use exampleLet and exampleConst here
```

**Redeclare variable**
```javascript
var x = 1;
var x = 2;          // ok

let x = 1;
let x = 2;          // Error: Identifier 'x' has already been declared

let x = 1;
if (true) {
  let x = 2;        // ok, because block scope
}

const x = 1;
const x = 2;        // Error: Identifier 'x' has already been declared

const x = 1;
if (true) {
  const x = 2;      // ok, because block scope
}
```

**Update variable**
```javascript
var x = 1;
x = 2;              // ok

let x = 1;
x = 2;              // ok

let x = 1;
if (true) {
  x = 2;            // ok
}

const x = 1;
x = 2;              // Error: Assignment to constant variable.

const x = 1;
if (true) {
  x = 2;            // Error: Assignment to constant variable.
}
```

**Must assign a value when declare**
```javascript
var x;              // ok, initialised as undefined
let x;              // ok, initialised as undefined
const x;            // Error: Missing initializer in const declaration
```

**Hoisting**
```javascript
let x = 1;
if (true) {
                    // x is 'hoisted' to start of block
  console.log(x);
  let x = 2;        // Error: Cannot access 'x' before initialization
}
```

### References
1. [Let - w3schools.com](https://www.w3schools.com/js/js_let.asp)
2. [Const - w3schools.com](https://www.w3schools.com/js/js_const.asp)