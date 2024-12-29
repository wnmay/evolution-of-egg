<template>
  <div class="flex flex-col min-h-lvh bg-thisGrey text-thisBlack px-16 py-14 space-y-4">
    <!-- Header with dynamic title -->
    <header>
      <h1 class="text-center text-5xl font-payTone">{{ title }}</h1>
    </header>

    <!-- Main Content -->
    <main class="font-mergeOne flex-1 justify-center items-center">
      <div class="flex justify-center items-center"><slot></slot></div>
    </main>

    <!-- Prev/Next Buttons Section -->
    <footer class="flex justify-between mt-8 px-5">
      <Button
        @click="prevState"
        :disabled="currentState === 0"
        :buttonName="'Prev'"
      >
      </Button>

      <Button
        @click="nextState"
        :disabled="currentState === totalStates - 1"
        :buttonName="'Next'"
      >
      </Button>
    </footer>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
  components: {
    Button,
  },
  name: 'EggLayout',
  props: {
    title: {
      type: String,
      default: 'Egg', // Default title
    },
    totalStates: {
      type: Number,
      required: true,
    },
    currentState: {
      type: Number,
      required: true,
    },
  },
  methods: {
    // Move to the next state
    nextState() {
      if (this.currentState < this.totalStates - 1) {
        this.$emit('update:currentState', this.currentState + 1);
      }
    },
    // Move to the previous state
    prevState() {
      if (this.currentState > 0) {
        this.$emit('update:currentState', this.currentState - 1);
      }
    },
  },
};
</script>

<style scoped>
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
