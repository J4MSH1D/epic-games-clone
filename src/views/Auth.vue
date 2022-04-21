<script setup>
import Login from "../components/Auth/Login.vue";
</script>
<template>
  <div
    class="auth relative flex justify-center items-center w-screen h-screen overflow-hidden after:z-10 after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:bg-gray-900 after:opacity-80 bg-cover bg-center bg-[url('../assets/images/auth.jpg')]"
  >
    <Login />
  </div>
</template>
