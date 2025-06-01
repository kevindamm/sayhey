<template>
  <div>
    <header> <!-- TODO --> </header>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
    <div v-else>
      hmm... GUIDE page {{ route.path }} not found
    </div>
    <footer> <!-- TODO --> </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('guide').path(route.path).first()
})

definePageMeta({
  layout: 'guide',
})
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
prerenderRoutes([
  '',
  'dev-env',
  'page-layout',
  'core-api',
  'prod-env',
].map(page => `/guide/${page}`))
</script>
