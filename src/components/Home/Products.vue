<script setup>
import Title from "../Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from "vue-router";

defineProps({
  data: {
    requierd: true,
    type: Array,
  },
});
</script>
<template>
  <Title title="All Games" />
  <div class="w-screen px-10 md:my-10 my-5">
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
        class="littleOne border-2 border-gray-800 transition hover:border-white cursor-pointer"
        v-for="game in data"
        :key="game.id"
      >
        <RouterLink :to="{name: 'preview', params: {id: game.id}}">
          <img :src="game.background_image" :alt="game.slug" />
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
