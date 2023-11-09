<template>
  <div>
    <div class="flex flex-row items-center justify-center w-full">
      <Y2023Grid gridType="outer" :alliance="alliance" />
      <Y2023Grid gridType="co-op" :alliance="alliance" />
      <Y2023Grid gridType="outer" :alliance="alliance" />
    </div>
    <div class="flex flex-row items-center justify-center gap-4">
      <button class="bg-blue-500 text-white py-1 px-2 rounded-lg w-3/12">
        Save
      </button>
      <button class="bg-red-500 text-white py-1 px-2 rounded-lg w-3/12">
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
