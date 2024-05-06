import { createApp } from 'vue';
import App from './App.vue'
import router from './routers/router.js'
// import { Client } from '@stomp/stompjs';

// const client = new Client({
//     brokerURL: 'http://localhost:8088/ws',
//     debug: (str) => {
//         console.log(str);
//     },
//     reconnectDelay: 5000,
//     heartbeatIncoming: 4000,
//     heartbeatOutgoing: 4000,
// });
// client.activate();

const app = createApp(App);
// app.provide('stompClient', client);
app.use(router); // Use the router
app.mount('#app');
