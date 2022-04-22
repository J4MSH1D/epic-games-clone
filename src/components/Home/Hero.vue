<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectCoverflow } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
const pagination = {
  clickable: true,
  dynamicBullets: true,
};

const modules = [Pagination, EffectCoverflow];
</script>
<template>
  <div class="w-screen">
    <Swiper
      :pagination="pagination"
      grab-cursor
      :effect="'coverflow'"
      :coverflowEffect="{
        rotate: 60,
        stretch: 0,
        depth: 600,
        modifier: 1,
        slideShadows: true,
      }"
      :modules="modules"
      :slides-per-view="1.12"
      :space-between="3"
      :centeredSlides="true"
      :loop="true"
      class="text-white text-center"
    >
      <SwiperSlide>
        <img src="../../assets/images/farcry6.jpg" alt="farcry" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../assets/images/rainbow.jpg" alt="rainbow" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../assets/images/rainbowS.jpg" alt="rainbowS" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../assets/images/assasins.jpg" alt="assasins" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
