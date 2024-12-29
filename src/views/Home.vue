<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Background Video -->
    <video 
      autoplay 
      muted 
      loop 
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="/homebg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Fade Effect Layer -->
    <div 
      :class="['absolute inset-0 z-10 transition-all', backgroundClass]">
    </div>

    <!-- Content Overlay -->
    <div class="relative flex flex-col items-center justify-center h-full text-white text-center z-20">
      <div v-if="message" class="mt-6 text-xl">
        <p>{{ message }}</p>
      </div>
      <div v-else class="flex flex-col justify-center items-center">
        <h1 class="text-4xl mb-6 text-white break-words">Dear customer, What can I serve you today?</h1>
        
        <input 
          v-model="userInput" 
          type="text" 
          class="px-4 py-2 text-xl mb-4 w-2/3 border rounded-lg border-thisYellow bg-transparent text-white placeholder-white" 
          placeholder="Enter your choice"/>
    
        <Button @click="submitInput" :buttonName="'Submit'" />

      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
console.log(Button);


export default {
  components: {
    Button,
  },
  data() {
    return {
      userInput: '',
      message: '',
      backgroundClass: 'bg-transparent',
    };
  },
  methods: {
    submitInput() {
      this.message = "We don’t serve that kind of thing. We only have...";

      setTimeout(() => {
        this.backgroundClass = 'bg-white';

        setTimeout(() => {
          this.$router.push('/egg');
        }, 3000); 
      }, 1000);
    }
  }
};
</script>

<style scoped>

.transition-all {
  transition: background-color 2s ease-in-out;
}
</style>