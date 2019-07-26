var events = require('events')

var emitter = new events.EventEmitter()
// emitter.on('error', function(err = 'error') {
//   console.log(err)
// })

emitter.emit('error')
