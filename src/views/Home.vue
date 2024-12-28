<template>
  <div :class="[backgroundClass, 'flex flex-col items-center justify-center h-screen text-white text-center transition-all duration-2000 ease-in-out']">
    <div v-if="message" class="mt-6 text-xl">
      <p>{{ message }}</p>
    </div>
    <div v-else class="flex flex-col justify-center items-center">
      <h1 class="text-4xl mb-6 text-yellow-500">Dear customer, What can I serve you today?</h1>
      
      <input v-model="userInput" type="text" class="px-4 py-2 text-xl mb-4 w-2/3 border border-yellow-500 rounded bg-black text-white placeholder-white" placeholder="Enter your choice"/>
      
      <button @click="submitInput" class="px-6 py-3 text-lg rounded-full bg-yellow-500 text-black cursor-pointer transition-all duration-200 hover:bg-yellow-400">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      message: '',
      backgroundClass: 'bg-black',
    };
  },
  methods: {
    submitInput() {
      this.message = "We don’t serve that kind of thing. We only have...";

      setTimeout(() => {
        this.backgroundClass = 'bg-white';

        setTimeout(() => {
          this.$router.push('/egg');
        }, 1000); 
      }, 3000);
    }
  }
};
</script>

<style scoped>
.transition-all {
  transition: all 2s ease-in-out;
}
</style>