<template>
  <div class="container mx-auto max-w-4xl font-Nanum">
    <header class="flex justify-between items-center p-5 bg-white sticky top-0 left-0 z-50 shadow-bottom p-6">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2">하수구막힘 뚜러요</NuxtLink>
      </div>

      <Menu />
    </header>

    <main class="p-2"
    >
      <slot />
    </main>
    <Footer />
  </div> 
</template>
  
<script setup>
 
  
</script>
  
<style>
  .shadow-bottom {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>