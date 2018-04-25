

// so this is where you want to make the connection to.
const socket = io.connect('http://localhost:4000')


let message = document.getElementById('message')
let handle = document.getElementById('handle')
let btn = document.getElementById('send')
let output = document.getElementById('output')

// Emit events
btn.addEventListener('click', function(){
  console.log('click')
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
});

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
