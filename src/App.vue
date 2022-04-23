<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
    <RouterView />
  <aside
    class="fixed top-0 left-0 w-screen h-screen -z-40 bg-gradient-to-r from-gray-900 to-slate-800"
  ></aside>
</template>
