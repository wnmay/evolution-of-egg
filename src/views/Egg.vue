<script setup lang="ts">

</script>

<template>
<div class="flex flex-col items-center justify-center h-screen bg-thisGrey">
  <div class="text-6xl text-black font-pecita">
    Evolution of Egg
  </div>

  <div class="mt-4 text-black text-lg">
    What would you like your egg to evolve into?
  </div>

  <div class="flex flex-col gap-4 mt-6">
    <RouterLink to="/omelette">
      <button class="px-6 py-2 bg-thisYellow text-black font-semibold border-2 border-thisBlack rounded-lg hover:bg-yellow-500 focus:outline-none">
        omelette
      </button>
    </RouterLink>
    <RouterLink to="/fried-egg">
      <button class="px-6 py-2 bg-thisYellow text-black font-semibold border-2 border-thisBlack rounded-lg hover:bg-yellow-500 focus:outline-none">
        fried egg
      </button>
    </RouterLink>
  </div>
</div>

</template>