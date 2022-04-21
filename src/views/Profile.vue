<script setup>
import { useUser } from "../stores/user.js";
const userData = useUser();
</script>
<template>
  <div class="text-white mt-16 w-full flex justify-center flex-wrap items-center md:px-20 px">
    <div class="md:w-1/5 w-36 relative overflow-hidden rounded-full aspect-square ">
      <img v-if="userData.user" :src="userData.user.photoURL" class="w-full h-full" alt="User Image">
		</div>
    <div class="md:w-fit w-full md:mt-0 mt-10 md:ml-10">
      <div v-if="userData.user" class="text-3xl md:text-left text-center">{{ userData.user.displayName }}</div>
      <div v-if="userData.user" class="md:text-left text-slate-300 text-lg text-center">{{ userData.user.email }}</div>
      <div v-if="userData.user" class="text-xl mt-5 text-slate-300 md:text-left text-center"> Account Creation Time</div>
      <div v-if="userData.user" class="md:text-left text-lg text-center">{{ userData.user.metadata.creationTime }}</div>
      <div v-if="userData.user" class="text-xl mt-5 text-slate-300 md:text-left text-center"> Last Logined At Time</div>
      <div v-if="userData.user" class="md:text-left text-lg text-center">{{ userData.user.metadata.lastSignInTime }}</div>
      <div v-if="userData.user" class="flex justify-center mt-5 md:justify-start">
        <button @click="userData.signOut" class="md:mx-0 mx-auto outline outline-white rounded-sm px-3 py-1 transition hover:bg-white hover:text-black">Sign Out</button>
      </div>
    </div>
  </div>
</template>
