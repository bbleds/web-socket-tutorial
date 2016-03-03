;(function () {
  'use strict';

  const ws = io.connect();
  const form = document.querySelector("form");
  const name = document.querySelector("input[name='name']");
  const text = document.querySelector("input[name='text']");
  const ul = document.querySelector("ul");


  ws.on('connect', () => {
    console.log('socket connected');
  });

  ws.on('received chat', (msg) => {

      console.log('message received');
      let elemNode = document.createElement("h1");
      // create text for li
      let textNode = document.createTextNode(`${msg.name}:  ${msg.text}`);
      elemNode.appendChild(textNode);
      ul.appendChild(elemNode);
  });


// when form is submitted, create li element and append to ul
  form.addEventListener("submit", () => {
    // prevent default submission
    event.preventDefault();
    // create li
    let elemNode = document.createElement("h1");
    // create text for li
    let textNode = document.createTextNode(`${name.value}:  ${text.value}`);
    // append created text to li
    elemNode.appendChild(textNode);
    // append li to ul
    ul.appendChild(elemNode);

    // emit event over socket
    ws.emit('send chat', {
      name:name.value,
      text: text.value
    });

  });
}());
