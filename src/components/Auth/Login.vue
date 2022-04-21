<script setup>
import { useRouter } from "vue-router";
import { useUser } from "../../stores/user.js"
const useStore = useUser()
const router = useRouter()
</script>
<template>
  <div
    class="flex text-white item-center justify-center flex-col login md:w-1/3 w-2/3 z-20 relative"
  >
    <img
      src="../../assets/images/Epic_Games_logo.svg"
      class="md:h-40 h-32"
      alt="logo"
    />
    <button @click="router.push('/home')" class="w-full font-semibold transition hover:bg-blue-600 active:bg-blue-800 bg-blue-700 rounded-lg md:py-3 py-2 text-lg text-center mt-10">Get All There</button>
  </div>
</template>
