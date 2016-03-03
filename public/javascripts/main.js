;(function () {
  'use strict';

  const ws = io.connect();

  ws.on('connect', () => {
    console.log('socket connected');
  });

  const form = document.querySelector("form");
  const name = document.querySelector("input[name='name']");
  const text = document.querySelector("input[name='text']");
  const ul = document.querySelector("ul");

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
  });
}());
