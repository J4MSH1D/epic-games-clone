<script setup>
import Hero from "../components/Home/Hero.vue";
import Products from "../components/Home/Products.vue";
import { base } from "../stores/api.js"
const data = base()
</script>
<template>
<Hero />
<Products v-if="data.data" :data="data.data" />
</template>
