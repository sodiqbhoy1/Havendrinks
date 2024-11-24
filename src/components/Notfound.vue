<template>
  <div class="min-h-screen bg-light-gray flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <!-- 404 Error Code -->
      <h1 class="text-6xl font-bold text-teal-600 mb-4">404</h1>
      <!-- Error Message -->
      <p class="mt-4 text-xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
      <p class="mt-2 text-gray-500">It looks like you got lost.</p>

      <!-- Go Back Home Button -->
      
      
      <a href="/" class=" block mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 transition duration-300">Go Back Home</a>

      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: '' }); // Navigates to the Home page
    },
  },
};
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
