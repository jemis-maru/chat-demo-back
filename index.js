const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

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