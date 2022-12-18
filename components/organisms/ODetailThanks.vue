<template>
  <div class="w-full p-4 bg-white">
    <div class="flex justify-between">
      <h3 class="mb-4 text-base font-bold sm:mb-3 sm:text-lg">
        スタッフ紹介
      </h3>
      <a href="#" class="text-sm leading-[22px] text-pink">お礼を投稿する</a>
    </div>

    <ul class="staff">
      <li v-for="staff in staffs" :key="staff.id" class="flex gap-5">
        <!-- スタッフ画像（円形,PC） -->
        <AImage
          :src="staff.avatar_url"
          alt="スタッフの画像 - PC"
          :width="80"
          :height="80"
          :rounded="true"
          :no-image-file-name="'avatar.jpg'"
          class="hidden sm:block"
        />
        <!-- スタッフ紹介フィールド -->
        <div class="w-full">
          <div class="mb-3 flex gap-5 items-center sm:block">
            <!-- スタッフ画像（円形,SP） -->
            <AImage
              :src="staff.avatar_url"
              alt="スタッフの画像 - SP"
              :width="80"
              :height="80"
              :rounded="true"
              :no-image-file-name="'avatar.jpg'"
              class="sm:hidden"
            />
            <div class="sm:flex sm:justify-between">
              <!-- 名前フィールド -->
              <div class="mb-2 sm:mb-4">
                <!-- 名前 -->
                <p class="text-sm leading-4 font-bold sm:text-base">
                  {{ staff.name }}
                </p>
                <!-- ひらがな -->
                <p class="text-[10px] text-gray-base sm:text-xs">
                  {{ staff.furigana }}
                </p>
              </div>
              <!-- スタッフ説明文 -->
              <p class="text-xs leading-[18px] text-gray-base sm:leading-4 sm:w-[260px]">
                {{ staff.introduction }}
              </p>
            </div>
          </div>

          <!-- お礼コメントフィールド -->
          <div
            v-for="(thanks_message, index) in staff.thanks_messages"
            :key="index"
            class="p-2.5 flex gap-2 items-start bg-lightGreen"
          >
            <img src="@/assets/img/user.svg" width="16" height="16" alt="" />
            <div>
              <p class="mb-[2px] text-[10px] leading-[10px] font-bold">
                ユーザーからのお礼コメント
              </p>
              <!-- お礼コメント -->
              <p class="text-[11px] min-h-8 sm:text-xs">
                {{ thanks_message }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { OfficeStaff } from '@/api/@types'

export type Props = {
  staffs: (OfficeStaff & {
    thanks_messages: string[]
  })[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.staff {
  li:not(:last-of-type) {
    @apply mb-6;
  }
}
</style>
