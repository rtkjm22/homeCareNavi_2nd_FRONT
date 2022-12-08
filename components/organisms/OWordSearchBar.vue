<template>
  <MSearchBar
    v-model="words"
    placeholder="事業所名、市区町村など"
    @search-submit="wordSearch"
  />
</template>

<script setup lang="ts">
const router = useRouter()
const { buildWordSearchUrl, getWordSearchParams } = useWordSearch()

const { words: urlWords } = getWordSearchParams()
const words = ref(urlWords || '')

const wordSearch = () => {
  const url = buildWordSearchUrl({ words: words.value, page: 1 })
  router.push(url)
}
</script>
