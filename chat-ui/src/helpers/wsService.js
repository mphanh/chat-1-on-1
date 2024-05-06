import { Client } from '@stomp/stompjs';

const socket = new Client({
    brokerURL: 'http://localhost:8088/ws',
    debug: (str) => {
        console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
});

export function connect() {
    socket.activate();
}

export function sendMessage(message) {
    socket.publish({ destination: '/app/chat', body: JSON.stringify(message) });
}

export function subscribe(callback) {
    socket.onConnect = () => {
        socket.subscribe('/topic/messages', (message) => {
            const messageBody = JSON.parse(message.body);
            callback(messageBody);
        });
    };
}