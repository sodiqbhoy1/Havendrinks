<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-semibold text-teal-600 mb-12">Our Services</h2>
        
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Service 1 -->
          <div class="p-6 bg-teal-50 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-100">
            <h3 class="text-2xl font-semibold text-teal-600 mb-4">Wide Selection</h3>
            <p class="text-gray-700">We offer a diverse range of drinks, from fresh juices to specialty sodas and smoothies, ensuring there's something for everyone.</p>
          </div>
          
          <!-- Service 2 -->
          <div class="p-6 bg-teal-50 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-100">
            <h3 class="text-2xl font-semibold text-teal-600 mb-4">Fast Delivery</h3>
            <p class="text-gray-700">Get your favorite drinks delivered to your doorstep with our quick and reliable delivery service, ensuring you never run out of refreshment.</p>
          </div>
          
          <!-- Service 3 -->
          <div class="p-6 bg-teal-50 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-100">
            <h3 class="text-2xl font-semibold text-teal-600 mb-4">Custom Orders</h3>
            <p class="text-gray-700">Need a unique drink blend? We offer custom drink creation services, so you can craft the perfect drink just for you!</p>
          </div>
        </div>
        
        <div class="mt-10">
          <a href="#shop" class="bg-teal-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-teal-500 transition duration-300">Explore Our Products</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Services',
  };
  </script>
  
  <style scoped>
  /* Optional additional styles for the page */
  </style>
  