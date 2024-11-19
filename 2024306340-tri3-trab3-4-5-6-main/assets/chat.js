const main = document.querySelector("main")
const input = document.querySelector("input")
const button = document.querySelector("button")
let nick = ""

function mostrarMensagem(message, timestamp, nick_) {
    main.innerHTML += `
    <div class="message ${nick_ == nick ? "owner" : ""}">
      <div class="content">${message}</div>
      <div class="time">${timestamp}</div>
      <div class="nick">${nick_}
    </div>
    `
}

const ws = new WebSocket("ws://192.168.120.53:4000")

ws.addEventListener("open", () => console.log("Conectado"))
ws.addEventListener("close", () => console.log("Desconectado"))

ws.addEventListener("message", (event) => {
    const data = JSON.parse(event.data)
    mostrarMensagem(data.message, data.timestamp, data.nick)
})

button.addEventListener("click", () => {
    const message = input.value

    if (message.startsWith("/nick ")) {
        nick = message.split(" ")[1]
        document.querySelector("h1.nick").innerText = nick
    }

    ws.send(message)
})