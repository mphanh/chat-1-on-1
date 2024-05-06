<template>
  <div class="chat-container hidden" id="chat-page">
    <UserList :nickname="nickname" :fullname="fullname" />

    <div class="chat-area">
      <!-- <div class="chat-area" id="chat-messages"></div> -->
      <div class="chat-area" id="chat-messages" v-for="(message, index) in messages" :key="index">
        <p>{{ message }}</p>
      </div>

      <form id="messageForm" name="messageForm">
        <div class="message-input">
          <!-- <input
            autocomplete="off"
            type="text"
            id="message"
            placeholder="Type your message..."
          /> -->
          <input id="message" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserList from "./UserList.vue";
export default {
  components: {
    UserList,
  },
  data() {
    return {
      fullname: "",
      nickname: "",
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      const stompClient = this.$root.provides.stompClient;
      stompClient.publish({ destination: '/app/chat', body: this.newMessage });
      this.newMessage = '';
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  max-width: 800px;
  min-width: 800px;
  min-height: 600px;
  max-height: 600px;
  margin: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.chat-area {
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.message {
  margin-bottom: 5px;
  border-radius: 5px;
}

#chat-messages {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.message p {
  padding: 0 12px;
  border-radius: 15px;
  word-wrap: break-word;
}
.sender {
  background-color: #3498db;
  color: #fff;
  align-self: flex-end;
}

.receiver {
  background-color: #ecf0f1;
  color: #333;
  align-self: flex-start;
}

.message-input {
  margin-top: auto;
  display: flex;
}

.message-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.message-input button {
  padding: 10px;
  border: none;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
/* .hidden {
  display: none;
} */
</style>
