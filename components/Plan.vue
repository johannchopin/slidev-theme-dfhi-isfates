<script setup>
const props = defineProps({
  columns: {
    type: String,
    default: "1",
  },
})
</script>

<template>
  <div :style="{'--columns': props.columns}">
  <Toc />
</div>
</template>

<style>
.slidev-toc>.slidev-toc-list {
  @apply text-sm leading-none;
  column-count: var(--columns);
}

.slidev-toc>.slidev-toc-list>.slidev-toc-item>a:first-of-type {
  @apply font-bold;
}

.slidev-toc-item {
  @apply !my-0;
  list-style-type: none;
}

.slidev-toc-item p {
  @apply leading-normal;
}

.slidev-toc-item .slidev-toc-item {
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow-x: clip;
  font-size: 95%;
}

.slidev-toc-item .slidev-toc-item .slidev-toc-item {
  font-size: 80%;
}

.slidev-toc .slidev-toc-list {
  counter-reset: list;
}

.slidev-toc .slidev-toc-item:before {
  counter-increment: list;
  content: counters(list, ".") ". ";
}
</style>