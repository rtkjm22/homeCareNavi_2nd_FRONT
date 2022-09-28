<template>
  <div
    class="flex justify-between items-center w-full sm:justify-around lg:justify-between"
  >
    <p class="pl-2 text-[11px] whitespace-nowrap text-gray-base font-bold">
      営業日
    </p>
    <table class="border-collapse border border-slate-500">
      <thead>
        <tr>
          <th class="workDay_head workDay_head__red">
            日
          </th>
          <th class="workDay_head">
            月
          </th>
          <th class="workDay_head">
            火
          </th>
          <th class="workDay_head">
            水
          </th>
          <th class="workDay_head">
            木
          </th>
          <th class="workDay_head">
            金
          </th>
          <th class="workDay_head workDay_head__blue">
            土
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(flg, index) in workDayFlgs" :key="index" class="workDay_body">
            <span :class="flg" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
type Weeks = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

interface Props {
  workDay: Weeks[];
}
const props = defineProps<Props>()

// 取得する値は以下の値が含まれている配列
const weeks: Weeks[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// 営業日なのか判断（trueの場合営業日）
const workDayFlgs = ref<string[]>([])

const setWorkDay = (): void => {
  for (let i = 0; i < weeks.length; i++) {
    if (props.workDay.includes(weeks[i])) {
      // 営業日の場合
      workDayFlgs.value.push('circle')
    } else {
      // 休業日の場合
      workDayFlgs.value.push('cross')
    }
  }
}
setWorkDay()
</script>
<style scoped lang="scss">
.workDay {
  &_head {
    @apply py-1 px-3 text-[11px] text-gray-dark border border-b-0 border-gray-lighter bg-[#F5F7F7];
    &__red {
      @apply text-[#E23E5D];
    }
    &__blue {
      @apply text-[#2E6EE6];
    }
  }
  &_body {
    @apply text-center items-center py-1 px-[11px] border border-t-0 border-gray-lighter;
  }
}

.circle {
  display: inline-block;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  border-radius: 50%;
  border: solid 2px;
  @apply border-orange;
}

.cross {
  display: block;
  position: relative;
  width: 14px;
  height: 14px;
  margin: auto;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    transform: rotate(45deg);
    transform-origin: 0% 50%;
    position: absolute;
    top: calc(14% - 1px);
    left: 14%;
    @apply bg-gray-light;
  }
  &::after {
    transform: rotate(-45deg);
    transform-origin: 100% 50%;
    left: auto;
    right: 16%;
  }
}
</style>
