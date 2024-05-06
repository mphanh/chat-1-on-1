<template>
  <!-- <AuthForm /> -->
  <router-view></router-view>
  <!-- <ChatPage /> -->
</template>

<script>
// import AuthForm from './components/AuthForm.vue'
// import ChatPage from './components/ChatPage.vue'

export default {
  name: 'App',
  components: {
    // AuthForm,
    // ChatPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
  display: flex;
}
</style>
