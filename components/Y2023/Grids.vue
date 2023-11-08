<template>
  <div>
    <div class="flex flex-row items-center justify-center w-full gap-1">
      <Y2023Grid gridType="outer" :alliance="alliance" />
      <Y2023Grid gridType="co-op" :alliance="alliance" />
      <Y2023Grid gridType="outer" :alliance="alliance" />
    </div>
    <div>
      <button>
        Done
      </button>
      <button>
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
