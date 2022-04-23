<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRoute, useRouter } from "vue-router";
import { base } from "../stores/api.js";
const id = Number(useRoute().params.id);
const data = base();
const router = useRouter()
const currentGame = data.getCurrentData(id);
</script>
<template>
  <div
    class="w-screen overflow-hidden md:mt-50 min-h-screen bg-slate-500 relative after:fixed after:w-screen after:h-screen after:top-0 after:bg-slate-800 after:z-10 after:opacity-50"
  >
    <img
      :src="currentGame.background_image"
      class="fixed w-full h-full object-cover -z-5"
      alt="background"
    />
    <div class="px-10 text-white mt-40 relative z-20">
      <div class="text-6xl">{{ currentGame.name }}</div>
      <div class="mt-5">
        <span class="text-2xl">Genres:</span>
        <span
          class="text-lg capitalize"
          v-for="(genre, index) in currentGame.genres"
          :key="index"
          >#{{ genre.name }}&nbsp;</span
        >
      </div>
      <div class="mt-5">
        <span class="text-2xl">Parent Platforms:</span>
        <span
          class="text-lg capitalize"
          v-for="(platform, index) in currentGame.parent_platforms"
          :key="index"
          >{{ platform.platform.name }}&nbsp;</span
        >
      </div>
      <div class="mt-5">
        <span class="text-2xl"
          >Rating:
          <span class="text-amber-500">{{ currentGame.rating }}</span></span
        >
      </div>
      <div class="md:my-5 mt-5 mb-1"><span class="text-2xl">Short Screenshots</span></div>
      <div class="w-full">
        <Swiper
          :slides-per-view="3.2"
          :space-between="50"
          class="text-white text-center"
          :breakpoints="{
            '320': {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide
            v-for="image in currentGame.short_screenshots"
            :key="image.id"
            class="littleOne cursor-pointer"
          >
            <img :src="image.image" alt="screenshots" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="mb-20 mt-10">
          <button @click="router.go(-1)" class="transition hover:bg-white hover:text-black font-bold rounded py-1 px-3 capitalize border-2 border-white">Go back</button>
      </div>
    </div>
  </div>
</template>
