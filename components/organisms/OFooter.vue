<template>
  <div>
    <div class="relative bg-white w-full">
      <div class="max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div
          class="py-4 w-full flex justify-between  flex-col-reverse sm:py-[15px] sm:flex-row sm:space-x-10"
        >
          <!-- タイトル -->
          <div
            class="flex justify-between "
          >
            <NuxtLink
              href="/"
              class="inline-block text-sm font-bold text-gray-dark"
            >
              ホームケアナビ
            </NuxtLink>
            <small class="inline-block text-[10px] text-gray-light sm:ml-6">&copy;hogehoge</small>
          </div>
          <!-- リンク -->
          <div
            class="mb-4 flex items-center justify-center sm:mb-0"
          >
            <nav>
              <ul class="flex ">
                <li v-for="link in links" :key="link.text" class="linkItem" :class="roleColor">
                  <NuxtLink :to="link.to">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  role?: 'client' | 'manager'
}

const props = withDefaults(
  defineProps<Props>(),
  { role: 'client' }
)

const roleColor = computed(() => {
  if (props.role === 'manager') {
    return `linkItem-${props.role}`
  }
})

const links = [
  {
    text: 'プライバシーポリシー',
    to: '/'
  },
  {
    text: '利用規約',
    to: '/'
  },
  {
    text: 'お問い合わせ',
    to: '/'
  }
]
</script>

<style scoped lang="scss">
.linkItem {
  @apply text-[11px] text-pink whitespace-nowrap;
  &-manager {
    @apply text-orange;
  }
}
.linkItem:not(:last-of-type) {
  @apply mr-5;
}
</style>
