<template>
  <!-- :keyが無いとNuxtLinkでのページ遷移時にエラー
  https://github.com/nuxt/framework/issues/3141 -->
  <div :key="$route.fullPath" data-test-mounted="false">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const appDiv = document.querySelector<HTMLDivElement>('div[data-test-mounted]')
  if (appDiv === null) { return }
  appDiv.dataset.testMounted = 'true'
})
</script>
