<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
  buttonName: string;
}>();
</script>

<template>
  <button class="px-6 py-2 bg-thisYellow text-black font-semibold border-2 border-thisBlack rounded-lg hover:bg-yellow-500 focus:outline-none">
    {{ buttonName }}
    </button>
</template>
