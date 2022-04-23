<script setup>
defineProps({
    title: {
        required: true,
        type: String,
    }
})
</script>
<template>
    <div class="title mt-20 md:ml-10 ml-4 text-white md:text-4xl text-2xl">
        {{ title }}
    </div>
</template>