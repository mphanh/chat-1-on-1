<template>
  <div class="users-list">
      <div class="users-list-container">
        <h2>Online Users</h2>
        <ul id="connectedUsers"></ul>
      </div>
      <div>
        <p id="connected-user-fullname"></p>
        <a class="logout" href="/" id="logout">Logout</a>
      </div>
    </div>
</template>

<script>
export default {
    props: {
    nickname: {
      type: String,
      required: true
    },
    fullname: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.users-list {
    flex: 1;
    border-right: 1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;
    background-color: #3498db;
    color: #fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.users-list-container {
    height: 100%;
    overflow-y: scroll;
}

.users-list h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.users-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.user-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
}

.user-item.active {
    background-color: #cdebff;
    color: #4f4f4f;
    padding: 10px;
    border-radius: 5px;
}

.user-item img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.user-item span {
    font-weight: bold;
}
.separator {
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
}
.user-item span.nbr-msg {
    margin-left: 10px;
    background-color: #f8fa6f;
    color: white;
    padding: 5px;
    width: 10px;
    border-radius: 50%;
    height: 10px;
}
a.logout {
    color: #fff;
    text-decoration: none;
}
</style>