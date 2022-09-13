<template>
  <!-- :keyが無いとNuxtLinkでのページ遷移時にエラー
  https://github.com/nuxt/framework/issues/3141 -->
  <div :key="$route.fullPath">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
