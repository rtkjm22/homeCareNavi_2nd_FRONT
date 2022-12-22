<template>
  <div class="">
    <ul class="grid gap-4 md:grid-cols-2">
      <li
        v-for="reserve in reserves"
        :key="reserve.id"
        class="block m-auto w-full max-w-[400px] bg-white rounded shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]"
      >
        <OReserveCard v-bind="reserve" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Reserve } from '@/api/@types'

type Props = {
  reserves: Reserve[]
}

defineProps<Props>()
</script>
