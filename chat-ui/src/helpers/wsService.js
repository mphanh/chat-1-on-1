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

// export async function onMessageReceived(payload) {
//     await findAndDisplayConnectedUsers();
//     console.log('Message received', payload);
//     const message = JSON.parse(payload.body);
//     if (selectedUserId && selectedUserId === message.senderId) {
//         displayMessage(message.senderId, message.content);
//         chatArea.scrollTop = chatArea.scrollHeight;
//     }

//     if (selectedUserId) {
//         document.querySelector(`#${selectedUserId}`).classList.add('active');
//     } else {
//         messageForm.classList.add('hidden');
//     }

//     const notifiedUser = document.querySelector(`#${message.senderId}`);
//     if (notifiedUser && !notifiedUser.classList.contains('active')) {
//         const nbrMsg = notifiedUser.querySelector('.nbr-msg');
//         nbrMsg.classList.remove('hidden');
//         nbrMsg.textContent = '';
//     }
// }

// async function findAndDisplayConnectedUsers() {
//     const connectedUsersResponse = await fetch('/users');
//     let connectedUsers = await connectedUsersResponse.json();
//     connectedUsers = connectedUsers.filter(user => user.nickName !== nickname);
//     const connectedUsersList = document.getElementById('connectedUsers');
//     connectedUsersList.innerHTML = '';

//     connectedUsers.forEach(user => {
//         appendUserElement(user, connectedUsersList);
//         if (connectedUsers.indexOf(user) < connectedUsers.length - 1) {
//             const separator = document.createElement('li');
//             separator.classList.add('separator');
//             connectedUsersList.appendChild(separator);
//         }
//     });
// }