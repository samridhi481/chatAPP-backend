const socket = io()

const messageContainer = document.getElementById('message-container')
const nameInput = document.getElementById('name-input')
const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message-input')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})

socket.on('clients-total', (data) => {
    console.log(data)
   
})

function sendMessage() {
    if (messageInput.value === '') return
    console.log(messageInput.value)
    const data = {
        name: nameInput.value,
        message: messageInput.value,
        dateTime: new Date()
    }

    socket.emit('message', data)
}

socket.on('chat-message', (data) =>{
 console.log(data)
})
