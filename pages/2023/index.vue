<template>
  <div class="">

    <!-- Breadcrumbs -->
    <div class="flex flex-row items-center justify-center">
      2023 / Ruckus / Playoffs / Match 2 / Blue / Team 1234
    </div>

    <!-- Start of Action -->
    <h2 class="font-semibold">Select start of action:</h2>
    <div class="flex flex-row items-center justify-between gap-1 my-2">
      <!-- Charge -->
      <button class="border-gray-200 border-2 rounded-full p-2" @click="handleState('charge')">
        <div class="text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16" viewBox="0 0 24 24"><path fill="currentColor" d="m8.5 19l2.5-4H9.5v-3L7 16h1.5v3ZM6 10h6V5H6v5ZM4 21V5q0-.825.588-1.413T6 3h6q.825 0 1.413.588T14 5v7h1.25q.725 0 1.238.513T17 13.75v4.625q0 .425.35.775t.775.35q.45 0 .788-.35t.337-.775V9H19q-.425 0-.713-.288T18 8V6h.5V4.5h1V6h1V4.5h1V6h.5v2q0 .425-.288.713T21 9h-.25v9.375q0 1.05-.763 1.838T18.126 21q-1.075 0-1.85-.788t-.775-1.837V13.75q0-.125-.063-.188t-.187-.062H14V21H4Z"/></svg>
        </div>
      </button>

      <!-- Cone -->
      <button 
        class="border-gray-200 border-2 rounded-full p-2" 
        @click="handleState('cone')"
      >
        <div class="text-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16" viewBox="0 0 16 16">
            <path fill="currentColor" d="m9.97 4.88l.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598l.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257l2.391.598z"/>
          </svg>
        </div>
      </button>

      <!-- Cube -->
      <button class="border-gray-200 border-2 rounded-full p-2" @click="handleState('cube')">
        <div class="text-purple-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16" viewBox="0 0 512 512"><path fill="currentColor" d="M440.9 136.3a4 4 0 0 0 0-6.91L288.16 40.65a64.14 64.14 0 0 0-64.33 0L71.12 129.39a4 4 0 0 0 0 6.91L254 243.88a4 4 0 0 0 4.06 0ZM54 163.51a4 4 0 0 0-6 3.49v173.89a48 48 0 0 0 23.84 41.39L234 479.51a4 4 0 0 0 6-3.46V274.3a4 4 0 0 0-2-3.46ZM272 275v201a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.89V167a4 4 0 0 0-6-3.45l-184 108a4 4 0 0 0-2 3.45Z"/></svg>
        </div>
      </button>

      <!-- Robot Inactive/Active Toggle -->
      <button class="border-gray-200 border-2 rounded-full p-2" @click="handleState('active')">
        <div v-if="robotActive" class="text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16" viewBox="0 0 24 24"><path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M9.86 16.68l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18-1.18l1.18-1.18l-1.18-1.18l1.18-1.18l1.18 1.18l1.18-1.18l1.18 1.18l-1.18 1.18l1.18 1.18m9 0l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18-1.18l1.18-1.18l-1.18-1.18l1.18-1.18l1.18 1.18l1.18-1.18l1.18 1.18l-1.18 1.18l1.18 1.18Z"/></svg>
        </div>
        <div v-else class="text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"/></svg>
        </div>
      </button>
       
    </div>
    
    <Y2023Grids :alliance="alliance" />
    
  </div>
</template>

<script lang="ts" setup>

const alliance = ref("red")
const stateRoot = ref("cone")
const robotActive = ref(true)

const handleState = (state: string) => {
  stateRoot.value = state
  console.log(stateRoot.value)
}

</script>
