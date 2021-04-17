'use strict';

const webSocketServer = require('ws').Server;
const wss = new webSocketServer({ port: 8081 });

const respondToClient = () => {
    const commonAnswers = [ 
        
    ];
    //TODO: Completar esta función para que devuelva un string aleatorio del arreglo anterior
};


wss.on('connection', (ws: any) => {

    console.log(ws._socket.remoteAddress);  // con esta info se identifica el cliente
    console.log(ws._socket.remotePort);     //--- || ---

    ws.send('Hello Client');
  
    ws.on('message', (message: any) => {
      console.log(`[Client]: ${message}`);
    });
  
    ws.on('end', () => {
      console.log('Connection ended...');
    });
  
  });
  