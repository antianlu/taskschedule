/**
 * Created by antianlu on 14-9-30.
 */

module.exports = function(io)
{
    io.use(function (socket) {

    });

    io('/task').on('connection',function(socket){
        socket.emit('do task list');
    })
}