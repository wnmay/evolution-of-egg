<template>
  <EggLayout 
    :title="'Omelette'"
    :totalStates="3"
    :currentState="currentState"
    @update:currentState="updateState"
  >
    <div v-if="currentState === 0">Content for Step 1</div>
    <div v-if="currentState === 1">Content for Step 2</div>
    <div v-if="currentState === 2">Content for Step 3</div>
  </EggLayout>
</template>

<script>
import EggLayout from '@/layouts/EggLayout.vue';

export default {
  components: { EggLayout },
  data() {
    return {
      currentState: 0,
    };
  },
  methods: {
    // Update the state when prev/next buttons are clicked
    updateState(newState) {
      this.currentState = newState;
    },
  },
};
</script>
