<template>
  <div class="w-full">
    <div class="flex flex-row items-center justify-center">
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="cone" />
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="cube" />
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="cone" /> 
    </div>
    
    <div class="flex flex-row items-center justify-center">
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="cone" />
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="cube" />
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="cone" />      
    </div>

    <div class="flex flex-row items-center justify-center">
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="hybrid" />
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="hybrid" />
      <Y2023GridNode :gridType="props.gridType" :alliance="props.alliance" nodeType="hybrid" />      
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  gridType: string,
  alliance: string
}>()

</script>
