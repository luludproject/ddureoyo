<template>
  <article class="prose">
    <ContentDoc/>
  </article>
  
</template>
  
<script setup>
  const route = useRoute()

  const { data } = await useAsyncData(`content-${route.path}`, () => queryContent(route.path).findOne())

  console.log(JSON.stringify(data))

  useHead({
  title: data._rawValue.title,
  meta: [
    { name: 'description', content: data._rawValue.description },
    { name: 'keywords', content: data._rawValue.keywords },
  ],
  })


</script>

<style>

</style>