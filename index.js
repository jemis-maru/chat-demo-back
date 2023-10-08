const express = require('express');

const app = express();

const port = 4000;

const server = app.listen(port, () => {
    console.log("app listening at port:" + port);
})

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data);
    });
});