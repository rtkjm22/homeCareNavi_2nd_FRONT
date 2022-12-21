<template>
  <div class="block mt-10 mx-auto mb-20 w-full max-w-[750px]">
    <NuxtLink
      to="/manager/auth/clients"
      class="relative hidden mb-4 pl-4 text-orange text-center text-sm opacity-80 md:inline-block"
    >
      <AArrow
        line-direction="left"
        line-color="orange"
        class="absolute top-2/4 left-0"
      />
      利用者情報一覧に戻る
    </NuxtLink>
    <div class="p-4 pb-8 w-full bg-white">
      <!-- タイトル -->
      <ATitle ttl-text="利用者情報編集" class="mb-6" />

      <!-- フォーム -->
      <form>
        <!-- 利用者の顔写真 -->
        <div class="mb-6">
          <div class="flex items-end justify-between sm:justify-start">
            <MDragAndDropRound label-target="feature_img_1" class="mr-6" />
            <label
              for="feature_img_1"
              class="text-orange text-sm text-right cursor-pointer whitespace-nowrap hover:opacity-80"
            >
              画像をアップロードする
            </label>
          </div>
        </div>

        <!-- スタッフ名 -->
        <AInput
          label-for="name"
          label-text="事業所名"
          input-type="text"
          placeholder="祖師谷ケアパークそよ風"
          :required="true"
          class="mb-6"
        />

        <!-- スタッフ名（ふりがな） -->
        <AInput
          label-for="name"
          label-text="事業所名"
          input-type="text"
          placeholder="祖師谷ケアパークそよ風"
          :required="true"
          class="mb-6"
        />

        <!-- 利用者の年齢 -->
        <div class="mb-6">
          <ALabel
            label-for="age"
            label-text="利用者の年齢"
            class="!inline-block mb-2"
          />
          <MSelectBox
            class="max-w-[168px]"
            :select-items="ageArr"
            select-for="age"
            :selected="79"
            ops-label="歳"
          />
        </div>

        <!-- 利用者住所 -->
        <AInput
          label-for="address"
          label-text="住所"
          input-type="text"
          placeholder="東京都世田谷区祖師谷4-3-15"
          :required="true"
          class="mb-8"
        >
          <template #top>
            <AInputAddressCd model-value="" />
          </template>
        </AInput>

        <!-- アクセス -->
        <AInput
          label-for="nearest_station"
          label-text="アクセス"
          input-type="text"
          placeholder="祖師谷大蔵駅5分"
          :required="true"
          class="mb-6"
        />

        <!-- 家族情報 -->
        <ATextArea
          label-for="workDay_detail"
          label-text="営業日時について"
          placeholder="営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。営業日時についてのテキストが入ります。"
          :required="true"
          class="mb-6"
          :min-cols="3"
        />

        <!-- 担当するスタッフ -->
        <div class="mb-6">
          <ALabel
            label-for="staffs"
            label-text="担当するスタッフ"
            class="!inline-block mb-2"
          />
          <MSelectBox
            class="w-full"
            :select-items="staffs"
            select-for="staffs"
          />
        </div>

        <div class="text-center">
          <!-- 送信ボタン -->
          <AButtonSubmit
            inner-text="変更する"
            user-type="manager"
            class="mb-2 py-3 sm:py-4"
          />
          <NuxtLink
            to="/manager/auth/clients"
            class="text-orange text-center text-sm"
          >
            もどる
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Item {
  itemKey: number | string // 選択肢のキー（画面上に表示）
  itemVal: number | string // 選択肢の値
}

/** 利用者の年齢用の選択肢 */
const ageArr: Item[] = []
for (let i = 0; i < 150; i++) {
  const item: Item = {
    itemKey: i + 1,
    itemVal: i + 1
  }
  ageArr.push(item)
}

/** スタッフ名用の選択肢 */
const staffs: Item[] = [
  {
    itemKey: '山田一郎',
    itemVal: 'yamadaIchiro'
  },
  {
    itemKey: '山田二郎',
    itemVal: 'yamadaJiro'
  },
  {
    itemKey: '山田三郎',
    itemVal: 'yamadaSaburo'
  },
  {
    itemKey: '山田四郎',
    itemVal: 'yamadaShiro'
  },
  {
    itemKey: '山田五郎',
    itemVal: 'yamadaGoro'
  },
  {
    itemKey: '山田六郎',
    itemVal: 'yamadaRokuro'
  }
]
</script>

<style scoped lang="scss"></style>
