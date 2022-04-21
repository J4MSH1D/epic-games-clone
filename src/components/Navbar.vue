<script setup>
import { RouterLink } from "vue-router";
import { useUser } from "../stores/user.js"
const userStore = useUser()
</script>
<template>
  <div
    class="flex justify-between items-center text-white z-30 px-10 w-screen py-2 fixed top-0 left-0 bg-slate-900"
  >
    <div class="cursor-pointer">
      <img class="h-10" src="../assets/images/Logo.png" alt="logo" />
    </div>
    <div class="font-semibold text-lg">
      <RouterLink v-if="userStore.user" to="/home">Home</RouterLink>
      <span @click="userStore.signIn" v-if="!userStore.user" class="mx-5 cursor-pointer border rounded px-2 py-1 transition hover:text-slate-900 hover:bg-white" to="/">Login</span>
      <span @click="userStore.signOut" v-if="userStore.user" class="mx-5 cursor-pointer border rounded px-2 py-1 transition hover:text-slate-900 hover:bg-white">Log Out</span>
    </div>
  </div>
</template>
