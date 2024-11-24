<template>
    <section class="bg-teal-600 text-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-semibold mb-6">Contact Us</h2>
        <p class="text-lg font-light mb-8 max-w-2xl mx-auto">
          Have any questions or need assistance? We're here to help! Reach out to us via email or through our contact form below, and we'll get back to you as soon as possible.
        </p>
        <div class="max-w-xl mx-auto">
          <!-- Contact Form -->
          <form class="bg-white text-teal-600 p-8 rounded-lg shadow-lg">
            <div class="mb-4">
              <label for="name" class="block text-lg font-semibold">Your Name</label>
              <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" required />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-lg font-semibold">Your Email</label>
              <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" required />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-lg font-semibold">Your Message</label>
              <textarea id="message" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" rows="4" required></textarea>
            </div>
            <button type="submit" class="w-full bg-teal-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-teal-500 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  