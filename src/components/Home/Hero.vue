<script setup>
import Title from "../Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
const pagination = {
  clickable: true,
  dynamicBullets: true,
};

const coverflowEffect = {
  rotate: 60,
  stretch: 0,
  depth: 600,
  modifier: 1,
  slideShadows: true,
};

const autoplay = {
  delay: 5000,
  disableOnInteraction: false,
};

const modules = [Pagination, EffectCoverflow, Autoplay];
</script>
<template>
  <div class="w-screen">
    <Title title="Exclusives" />
    <Swiper
      :pagination="pagination"
      grab-cursor
      :effect="'coverflow'"
      :coverflowEffect="coverflowEffect"
      :autoplay="autoplay"
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
