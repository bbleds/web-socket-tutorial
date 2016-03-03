;(function () {
  'use strict'

  const ws = io.connect()

  ws.on('connect', () => {
    console.log('socket connected')
  })
}());
