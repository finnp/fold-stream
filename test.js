var test = require('tape')
var streamify = require('stream-array')
var fold = require('./index.js')

test('create some functions', function (t) {

  t.plan(3)

  // SUM

  var sum = fold(function (acc, curr) {
    return acc + curr
  }, 0)

  streamify([1,2,3]).pipe(sum(function (result) {
    t.equal(result, 6)
  }))

  // CONCAT

  var concat = fold(function (acc, curr) {
    return acc + curr
  }, '')

  streamify(['he', 'll', 'o']).pipe(concat(function (result) {
    t.equal(result, 'hello')
  }))

  // ALL

  var all = fold(function (acc, curr) {
    return acc && curr
  }, true)

  streamify([true, true, true]).pipe(all(function (result) {
    t.ok(result, 'should all be true')
  }))
    
})

