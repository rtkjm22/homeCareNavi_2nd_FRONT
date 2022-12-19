<template>
  <div>
    <ul class="last:mb-5">
      <li
        v-for="prefecture in prefectures"
        :key="prefecture"
        class="
        md:w-[220px]
        w-[331px]
        h-[40px]
        flex
        items-center
        justify-between
        space-x-3
        m-auto
        py-[11px]
        border-b
      border-gray-lighter
        last:border-b-transparent
        md:last:border-b-gray-lighter
        text-sm
      text-gray-dark
        cursor-pointer
      "
        @click="$emit('selectPrefecture', prefecture)"
      >
        {{ prefecture }}
        <ARightArrow class="text-gray-light" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ prefectures: string[] }>()
defineEmits<{(e: 'selectPrefecture', value: string): void}>()
</script>

<style scoped lang="scss">
</style>
