<template>
  <div>
    <header> <!-- TODO --> </header>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
    <div v-else>
      hmm... POLICY page {{ route.path }} not found
    </div>
    <footer> <!-- TODO --> </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('policy').path(route.path).first()
})

definePageMeta({
  layout: 'policy',
})
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
prerenderRoutes([
  '',
  'privacy',
  'terms',
].map(page => `/policy/${page}`))
</script>
