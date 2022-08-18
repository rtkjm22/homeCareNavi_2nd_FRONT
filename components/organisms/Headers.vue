<template>
  <div class="border-t-2 border-t-pink shadow-sm">
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center pt-4 pb-3 md:justify-start md:space-x-10"
        >
          <!-- ヘッダー画像 -->
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                class="h-8 w-auto sm:h-8"
                src="@/assets/img/logo.svg"
                alt=""
              />
            </a>
          </div>
          <HeadersPC />
          <HeadersSP />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeadersPC from "./HeadersPC.vue";
import HeadersSP from "./HeadersSP.vue";
</script>
