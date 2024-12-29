<script setup lang="ts">
import Button from '@/components/Button.vue';


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
      <Button button-name="omelette"></Button>
    </RouterLink>
    <RouterLink to="/fried-egg">
      <Button button-name="fried egg"></Button>
    </RouterLink>
  </div>
</div>

</template>