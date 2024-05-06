<template>
  <div class="user-form" id="username-page">
    <h2>Enter Chatroom</h2>
    <form id="usernameForm">
      <label for="nickname">Nickname:</label>
      <input
        type="text"
        v-model="nickname"
        id="nickname"
        name="nickname"
        required
      />

      <label for="fullname">Real Name:</label>
      <input
        type="text"
        v-model="fullname"
        id="fullname"
        name="fullname"
        required
      />

      <button @click="connect">Enter Chatroom</button>
    </form>
  </div>
</template>

<script>
// import SockJS from "sockjs-client";
// import Stomp from "stompjs";
export default {
  name: "AuthForm",
  data() {
    return {
      fullname: "",
      nickname: "",
    };
  },
  methods: {
    connect(event) {
      if (this.nickname && this.fullname) {
        // const socket = new SockJS("http://localhost:8088/ws");
        // stompClient = Stomp.over(socket);
        const stompClient = this.$root.provides.stompClient;

        // stompClient.connect({}, onConnected, onError);
        stompClient.connect({}, () => {
          stompClient.send(
            "/app/user.addUser",
            {},
            JSON.stringify({
              nickName: this.nickname,
              fullName: this.fullname,
              status: "ONLINE",
            })
          );
          this.$router.push({
            name: "ChatPage",
            params: { nickname: this.nickname, fullname: this.fullname },
          });
        });
      }
      event.preventDefault();
    },
    // onConnected() {
    //   stompClient.subscribe(
    //     `/user/${this.nickname}/queue/messages`,
    //     onMessageReceived
    //   );
    //   stompClient.subscribe(`/user/public`, onMessageReceived);

    //   // register the connected user
    //   stompClient.send(
    //     "/app/user.addUser",
    //     {},
    //     JSON.stringify({
    //       nickName: this.nickname,
    //       fullName: this.fullname,
    //       status: "ONLINE",
    //     })
    //   );
    //   document.querySelector("#connected-user-fullname").textContent =
    //     this.fullname;
    //   findAndDisplayConnectedUsers().then();
    // },
    onConnect() {
      const stompClient = this.$root.provides.stompClient;
      stompClient.subscribe(`/user/${this.nickname}/queue/messages`, onMessageReceived);
      stompClient.subscribe(`/user/public`, onMessageReceived);
      stompClient.send(
        "/app/user.addUser",
        {},
        JSON.stringify({
          nickName: this.nickname,
          fullName: this.fullname,
          status: "ONLINE",
        })
      );
      this.$router.push({
        name: "ChatPage",
        params: { nickname: this.nickname, fullname: this.fullname },
      });
    },
  },
};
</script>

<style scoped>
.user-form {
  max-width: 400px;
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.user-form h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.user-form label {
  display: block;
  margin-bottom: 8px;
}

.user-form input {
  width: 100%;
  padding: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

.user-form button {
  padding: 12px;
  border: none;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.hidden {
  display: none;
}
</style>
