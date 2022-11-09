<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
/**
 * レイアウトでmiddlewareを指定できなかったので代わりの処置。
 * ディレクトリと同名のディレクトリ名.vueを用意することで、子ファイルのvueにdefinePageMetaを適用することが出来る
 * 今回は/client/auth以下は認証後でなければ弾かれるようにしてある。
 * @see https://github.com/nuxt/framework/issues/5501
 * */
definePageMeta({
  middleware: [
    'auth-client',

    // このページは子ファイルを設定するためだけのページなので、認証の有無にかかわらず訪れた場合は弾くようにする
    ({ path }) => {
      if (path === '/client/auth') {
        return navigateTo('/')
      }
    }
  ]
})
</script>
