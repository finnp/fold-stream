# fold-stream
Mac/Linux | Windows
----------| ---------
[![Build Status Linux](http://img.shields.io/travis/finnp/fold-stream.svg)](https://travis-ci.org/finnp/fold-stream) | [![Build Status Windows](http://img.shields.io/appveyor/ci/finnp/fold-stream.svg)](https://ci.appveyor.com/project/finnp/fold-stream)


Allows you to iterate over the chunks of a stream and construct
a new value that will be passed to a callback. It is similar to [].reduce.
In contrast to [stream-reduce](https://www.npmjs.org/package/stream-reduce) it does
not return a `Through`, but a function that takes a callback and returns a 
`Writable` stream, where the callback will be called with the result. Kind of 
like using `stream-reduce` and piping it into 
[concat-stream](https://www.npmjs.org/package/concat-stream).

Install it with `npm install fold-stream`.

Here is an example of how we can use it to create a simple concat stream for Strings:
```js
var fold = require('fold-stream')

var concat = fold(function (acc, curr) {
  return acc + curr
}, '')

process.stdin.pipe(concat(function (result) {
  console.log(result)
}))
```