<template>
  <button 
    class="w-full text-white aspect-square m-px rounded-sm flex items-center justify-center"
    :class="{
      'bg-blue-800': props.gridType == 'outer' && props.alliance == 'blue',
      'bg-red-800': props.gridType == 'outer' && props.alliance == 'red',
      'bg-slate-800': props.gridType == 'co-op',
    }"  
  >
    <div v-if="props.nodeType === 'cone'" class="p-1 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M9 3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9V3Z" clip-rule="evenodd"/></svg>      
    </div>
    <div v-if="props.nodeType === 'cube'" class="p-1 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/></svg>
    </div>
    <div v-if="props.nodeType === 'hybrid'" class="p-1 w-full">
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
