<script setup>
import Illustration from '../assets/blob-bottom-left.svg'

const props = defineProps({
  slideCounter: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="relative">
    <p class="absolute font-bold top-2/4 left-1/4" v-if="slideCounter">
      {{ $nav.currentPage }} |
    </p>
    <Illustration width="300px" />
  </div>
</template>