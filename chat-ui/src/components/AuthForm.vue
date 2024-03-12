<template>
  <div class="wrapper">
    <div class="user-form" id="username-page">
      <h2>Enter Chatroom</h2>
      <form id="usernameForm">
        <label for="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" required />

        <label for="fullname">Real Name:</label>
        <input type="text" id="fullname" name="realname" required />

        <button type="submit">Enter Chatroom</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  display: flex;
}
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
