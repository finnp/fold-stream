var Writable = require('stream').Writable

module.exports = function (reducer, start) {
  return function (cb) {
    var stream = new Writable({objectMode : true})
    stream.acc = start
    
    if (cb) stream.on('finish', function () { cb(stream.acc) })

    stream._write = function (chunk, enc, next) {
      this.acc = reducer(this.acc, chunk)
      next()
    }
    
    return stream  
  }
}