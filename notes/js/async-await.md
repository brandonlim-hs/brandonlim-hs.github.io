## Async / Await

### Async
1. `async` declaration makes a function [returns a Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#Return_value)
    - Wraps return values in `Promise.resolve`
2. Can contain `await` expression

`async` wraps return values in `Promise.resolve`, even if the value is not a Promise.
```javascript
async function example() {
  return 'done';
}   

example().then(result => {
  console.log(result);
  // expected output: 'done'
});
```

is the same as:
```javascript
function example() {
  return Promise.resolve('done');
}

example().then(result => {
  console.log(result);
  // expected output: 'done'
});
```

### Await
1. Execution process:
    1. Pause the execution of `async` function
    2. Wait for the Promise resolution
    3. Resume the execution of `async` function with the Promise resolved value
2. Can only be used within `async` functions

For example, given a function that returns a `fetch()` Promise:
```javascript
function fetchJson(url) {
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      alert(err);
    });
}

let url = "https://jsonplaceholder.typicode.com/todos/1";
fetchJson(url).then(result => {
  console.log(result);
  // expected output: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
});
```

Can be rewrite using `async/await`, by:
- Replace `.then` with `await`
- Replace `.catch` with `try..catch`
- Add `async` declaration
```javascript
async function fetchJson(url) {
  try {
    let response = await fetch(url);
    return await response.json();
    // return await response.json() will wait for the Promise to resolve or reject
    // therefore can catch the error before return if it rejects
  } catch (err) {
    alert(err);
  }
}

let url = "https://jsonplaceholder.typicode.com/todos/1";
fetchJson(url).then(result => {
  console.log(result);
  // expected output: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
});
```

### References
1. [async function - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
2. [Async/await - Javascript.info](https://javascript.info/async-await)
