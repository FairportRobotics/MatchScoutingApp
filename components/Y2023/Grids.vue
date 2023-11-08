<template>
  <div>
    <div class="flex flex-row items-center justify-center w-full gap-1">
      <Y2023Grid gridType="outer" :alliance="alliance" />
      <Y2023Grid gridType="co-op" :alliance="alliance" />
      <Y2023Grid gridType="outer" :alliance="alliance" />
    </div>
    <div class="flex flex-row items-center justify-center gap-4">
      <button class="bg-blue-500 text-white py-2 px-4 rounded-lg w-3/12">
        Done
      </button>
      <button class="bg-blue-500 text-white py-2 px-4 rounded-lg w-3/12">
        Cancel
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  alliance: string
}>()
</script>
