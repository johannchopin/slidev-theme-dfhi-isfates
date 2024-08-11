<script setup>
import { useBreadcrumbs } from '../setup/useBreadcrumbs';

const props = defineProps({
  minDepth: {
    type: String,
    default: "1",
  },
})

const breadcrumbs = useBreadcrumbs()
</script>

<template>
  <nav aria-label="breadcrumb" class="mb-2">
    <ol class="flex flex-wrap items-center w-full">
      <li v-for="breadcrumb in breadcrumbs.slice(Number(props.minDepth) - 1)" class="flex items-center !ml-0 !my-0 text-xs antialiased font-normal leading-normal">
        <Link :to="breadcrumb.slideNo">{{ breadcrumb.title }}</Link>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
ol li {
  &:not(:last-of-type)::after {
    content: "/";
    @apply mx-1 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none;
  }
}
</style>