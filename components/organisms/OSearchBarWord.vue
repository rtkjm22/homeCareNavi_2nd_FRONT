<template>
  <MSearchBar
    v-model="words"
    :placeholder="placeholder"
    @search-submit="wordSearch"
  />
</template>

<script setup lang="ts">
const router = useRouter()
const { buildWordSearchUrl, getWordSearchParams } = useSearchWord()

defineProps<{ placeholder: string }>()

const { words: urlWords } = getWordSearchParams()
const words = ref(urlWords || '')

const wordSearch = () => {
  const url = buildWordSearchUrl({ words: words.value, page: 1 })
  router.push(url)
}
</script>
