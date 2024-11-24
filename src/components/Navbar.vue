<template>
  <nav class="bg-teal-600 shadow-md fixed w-full z-50 top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-3xl font-bold text-white tracking-wide" > Drink Haven </router-link>

          
        </div>

        <!-- Links for Larger Screens -->
        <div class="hidden md:flex space-x-8">
          <router-link to="/" class="text-white hover:text-teal-200 transition duration-300" > Home </router-link>
          <router-link to="/about" class="text-white hover:text-teal-200 transition duration-300" > About  </router-link>
          <router-link to="/service" class="text-white hover:text-teal-200 transition duration-300" > Service  </router-link>
          <router-link to="/contact" class="text-white hover:text-teal-200 transition duration-300" > Contact  </router-link>
        </div>

        <!-- Dropdown for Mobile -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-white hover:text-teal-200 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-teal-600">
      
      <router-link to="/" class="block px-4 py-2 text-white hover:bg-teal-500 transition duration-300" > Home </router-link>
      <router-link to="/about" class="block px-4 py-2 text-white hover:bg-teal-500 transition duration-300" > About </router-link>
      <router-link to="/service" class="block px-4 py-2 text-white hover:bg-teal-500 transition duration-300" > Service </router-link>
      <router-link to="/contact" class="block px-4 py-2 text-white hover:bg-teal-500 transition duration-300" > Contact </router-link>
      
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Additional custom styles for navbar */
.navbar {
  font-family: 'Poppins', sans-serif;
}

</style>
