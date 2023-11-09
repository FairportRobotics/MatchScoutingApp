<template>
  <button 
    class="w-full aspect-square border border-2 flex items-center justify-center">
    <div v-if="props.nodeType === 'cone'" class="w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m11 3l1-1l1 1v17a2 2 0 0 1 2 2H9c0-1.1.9-2 2-2V3Z"/></svg>
    </div>
    <div v-if="props.nodeType === 'cube'" class="w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/></svg>
    </div>
    <div v-if="props.nodeType === 'hybrid'" class="w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/></svg>
    </div>
  </button>
</template>

<script lang="ts" setup>

const props = defineProps<{
  nodeType: string,
  gridType: string,
  alliance: string,
}>()

</script>
