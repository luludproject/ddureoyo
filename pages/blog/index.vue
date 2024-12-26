<template>
    <section class="container mx-auto py-8 px-4">
      <h1 class="text-3xl font-bold mb-6 text-center">블로그</h1>
    
    <!-- 블로그 목록 -->
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li 
        v-for="(post, index) in limitedPosts"
        :key="post._path" 
        class="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105" data-aos="fade-up"
      >
        <NuxtLink :to="post._path" class="block">
          <div class="h-48 bg-gray-200">
            <img 
              :src="post.image"
              alt="컨텐츠이미지" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 text-gray-800">
              {{ post.title }}
            </h2>
            <p class="text-sm text-gray-600 mb-4 line-clamp-3">
              {{ post.description || '내용 없음' }}
            </p>
            <span class="text-blue-500 font-medium inline-block hover:underline">
              더 읽어보기 →
            </span>
          </div>
        </NuxtLink>
      </li>
    </ul>

    
  </section>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';

const limitedPosts = ref([]);

const fetchPosts = async () => {
  const posts = await queryContent('/blog').find();
  // 첫 9개 포스트만 추출
  limitedPosts.value = posts.slice(0, 6);
};

onMounted(() => {
  fetchPosts();
});
  
</script>
  
<style>
  
</style>