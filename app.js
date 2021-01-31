const status = document.querySelector("#status");
const messages = document.querySelector("#messages");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

const ws = new WebSocket('ws://localhost:3000');

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    ws.send(input.value);
    input.value = "";
    
})

ws.onopen = () => setStatus("ONLINE");

ws.onclose = () => setStatus("DISCONNECTED");

ws.onmessage = response => printMessage(response.data);