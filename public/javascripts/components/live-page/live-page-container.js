var token = { authentication-token };
var wsURI = 'wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize'
  + '?watson-token=' + token
  + '&model=es-ES_BroadbandModel';
var websocket = new WebSocket(wsURI);
websocket.onopen = function (evt) { onOpen(evt) };
websocket.onclose = function (evt) { onClose(evt) };
websocket.onmessage = function (evt) { onMessage(evt) };
websocket.onerror = function (evt) { onError(evt) };

function onOpen(evt) {
  var message = {
    'action': 'start',
    'content-type': 'audio/l16;rate=22050'
  };
  websocket.send(JSON.stringify(message));
}