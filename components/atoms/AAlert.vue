<template>
  <Teleport to="body">
    <div
      v-show="alertState.isShow"
      class="fixed top-16 left-1/2 -translate-x-1/2 flex items-center justify-between gap-4 rounded border p-4 md:p-5"
      :class="baseColors"
      role="alert"
    >
      <div class="flex items-center gap-4">
        <span class="rounded-full p-2 text-white" :class="icon.color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              :d="icon.path"
            />
          </svg>
        </span>

        <p>
          <strong class="text-sm md:text-base font-medium"> {{ title }} </strong>

          <span class="block text-xs md:text-sm opacity-90">
            {{ alertState.message }}
          </span>
        </p>
      </div>

      <button class="opacity-90" type="button">
        <span class="sr-only"> Close </span>

        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          @click="closeAlert"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { alertState, closeAlert } = useAlert()

const baseColors = computed<string[]>(() => {
  switch (alertState.value.type) {
    case 'success':
      return ['border-green-900/10', 'bg-green-50', 'text-green-700']
    case 'info':
      return ['border-sky-900/10', 'bg-sky-50', 'text-sky-700']
    case 'warning':
      return ['border-amber-900/10', 'bg-amber-50', 'text-amber-700']
    case 'danger':
      return ['border-red-900/10', 'bg-red-50', 'text-red-700']
  }
})

const icon = computed<{ color: string, path: string }>(() => {
  switch (alertState.value.type) {
    case 'success':
      return {
        color: 'bg-green-600',
        path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    case 'info':
      return {
        color: 'border-sky-600',
        path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    case 'warning':
      return {
        color: 'bg-amber-600',
        path: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
      }
    case 'danger':
      return {
        color: 'bg-red-600',
        path: 'M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'
      }
  }
})

const title = computed<string>(() => {
  switch (alertState.value.type) {
    case 'success':
      return '成功'
    case 'info':
      return '情報'
    case 'warning':
      return '通知'
    case 'danger':
      return '失敗'
  }
})
</script>
