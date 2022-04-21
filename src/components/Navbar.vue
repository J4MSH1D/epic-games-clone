<script setup>
import { RouterLink } from "vue-router";
import { useUser } from "../stores/user.js"
const userStore = useUser()
</script>
<template>
  <div
    class="flex justify-between items-center text-white z-30 md:px-10 px-3 w-screen py-2 fixed top-0 left-0 bg-slate-900"
  >
    <div class="cursor-pointer">
      <img class="h-10" src="../assets/images/Logo.png" alt="logo" />
    </div>
    <div class="font-semibold md:text-lg text-md">
      <RouterLink v-if="userStore.user" to="/home">Home</RouterLink>
			<RouterLink v-if="userStore.user" to="/profile" class="md:mx-5 mx-3">Profile</RouterLink>
      <span @click="userStore.signIn" v-if="!userStore.user" class="cursor-pointer border rounded md:px-2 px-1 py-1 transition hover:text-slate-900 hover:bg-white" to="/">Login</span>
      <span @click="userStore.signOut" v-if="userStore.user" class="cursor-pointer border rounded md:px-2 px-1 py-1 transition hover:text-slate-900 hover:bg-white">Log Out</span>
    </div>
  </div>
</template>
