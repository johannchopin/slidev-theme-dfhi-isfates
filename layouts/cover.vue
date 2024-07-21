<script setup>
</script>

<template>
  <img src="../assets/blob-cover.svg" class="absolute top-0 left-0 w-2/5 -z-1"/>

  <div class="absolute top-2 left-2">
    <p v-if="$frontmatter.course" class="font-bold text-xl">{{ $frontmatter.course }}</p>
    <p v-if="$frontmatter.presenter" class="text-lg">{{ $frontmatter.presenter }}</p>
    <p v-if="$frontmatter.date" class="text-xs max-w-sm mt-2">{{ $frontmatter.date }}</p>
  </div>

  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
