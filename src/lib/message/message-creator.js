'use strict'

module.exports = exports = function (container) {
  let dictionary = module.dictionary = container.dictionary
  let eventEmitter = module.eventEmitter = container['event-emitter']

  return function (parameters, logEntry, colored, cartoon) {
    let msg = '' + logEntry.logBody

    eventEmitter.emit('console_log_details', colored, logEntry, function (message) {
      msg += message
    })

    let weHaveCartoon = parameters.face
    if (weHaveCartoon && cartoon) {
      msg = parameters.activity({
        text: msg,
        e: 'oO',
        T: 'U ',
        f: parameters.face
      })
    };

    return msg
  }
}
