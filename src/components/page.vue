<template>
  <div class="container mx-auto px-6 py-12 bg-[#f7f7f7]">
    <!-- Hero Section with Banner Image and Text -->
    <section class="relative bg-gray-100 text-gray-800 py-10 rounded-lg shadow-lg">
      <!-- Static Banner Image -->
      <div class="relative rounded h-[400px] bg-cover bg-center" style="background-image: url('/image1.jpg');">
        <div class="absolute inset-0 bg-black opacity-40"></div> <!-- Overlay for text contrast -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 class="text-5xl font-semibold mb-6 leading-tight text-white">Welcome to Drink Haven</h1>
          <p class="text-xl mb-8 font-light text-white opacity-80">Explore a wide variety of refreshing drinks from all over the world!</p>
          <a href="#shop" class="bg-teal-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-teal-600 transition duration-300">Shop Now</a>
        </div>
      </div>
    </section>

    <!-- Featured Drinks Section -->
    <section class="py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-semibold text-gray-800 mb-12">Featured Drinks</h2>
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Soft Drinks Card -->
          <div class="p-6 bg-white shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-xl">
            <img src="../assets/image1.jpg" alt="Soft Drinks" class="w-32 mx-auto mb-6 rounded-md shadow-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Soft Drinks</h3>
            <p class="text-gray-600">Enjoy a refreshing variety of sodas, colas, and sparkling beverages.</p>
          </div>
          <!-- Fresh Juices Card -->
          <div class="p-6 bg-white shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-xl">
            <img src="../assets/image1.jpg" alt="Fresh Juices" class="w-32 mx-auto mb-6 rounded-md shadow-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Fresh Juices</h3>
            <p class="text-gray-600">Indulge in our freshly squeezed juices made with natural fruits.</p>
          </div>
          <!-- Smoothies Card -->
          <div class="p-6 bg-white shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-xl">
            <img src="../assets/image3.jpg" alt="Smoothies" class="w-32 mx-auto mb-6 rounded-md shadow-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Smoothies</h3>
            <p class="text-gray-600">Cool down with a blend of fruit and yogurt smoothies, perfect for any time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Sellers Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-semibold text-gray-800 mb-12">Best Sellers</h2>
        <div class="flex justify-center gap-8">
          <div class="p-6 bg-white shadow-lg rounded-xl text-center transition transform hover:scale-105 hover:shadow-xl">
            <img src="../assets/tropicalpunch.jpg" alt="Tropical Punch" class="w-32 mx-auto mb-6 rounded-md shadow-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Tropical Punch</h3>
            <p class="text-gray-600">$4.99 – A sweet and tangy tropical blend</p>
            <a href="#" class="text-teal-500 font-semibold hover:underline mt-4 inline-block">Buy Now</a>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-xl text-center transition transform hover:scale-105 hover:shadow-xl">
            <img src="../assets/citrusfizz.jpg" alt="Citrus Fizz" class="w-32 mx-auto mb-6 rounded-md shadow-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Citrus Fizz</h3>
            <p class="text-gray-600">$3.49 – A zesty citrus sparkle</p>
            <a href="#" class="text-teal-500 font-semibold hover:underline mt-4 inline-block">Buy Now</a>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-xl text-center transition transform hover:scale-105 hover:shadow-xl">
            <img src="../assets/berryblast.jpg" alt="Berry Blast" class="w-32 mx-auto mb-6 rounded-md shadow-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Berry Blast</h3>
            <p class="text-gray-600">$5.29 – A rich blend of fresh berries</p>
            <a href="#" class="text-teal-500 font-semibold hover:underline mt-4 inline-block">Buy Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-teal-500 py-16 text-white text-center rounded-lg shadow-lg">
      <h2 class="text-3xl font-semibold mb-6">Ready to quench your thirst?</h2>
      <a href="#shop" class="bg-white text-teal-500 py-3 px-8 rounded-full font-semibold hover:bg-teal-200 shadow-md transition duration-300">Start Shopping</a>
    </section>

<!-- Footer Section -->
<footer class="bg-teal-500 text-white py-8 rounded-t-lg mt-12">
  <div class="container mx-auto text-center">
    <p class="text-sm opacity-80">&copy; 2024 Drink Haven. All rights reserved.</p>
    <p class="text-lg mt-4">Follow us on social media for exclusive deals!</p>
    <div class="mt-6 flex justify-center gap-6">
      <!-- Social Media Icons (Example) -->
      <a href="#" class="text-white hover:text-teal-200 transition duration-300">
        <i class="fab fa-facebook-f"></i> <!-- Example icon for Facebook -->
      </a>
      <a href="#" class="text-white hover:text-teal-200 transition duration-300">
        <i class="fab fa-twitter"></i> <!-- Example icon for Twitter -->
      </a>
      <a href="#" class="text-white hover:text-teal-200 transition duration-300">
        <i class="fab fa-instagram"></i> <!-- Example icon for Instagram -->
      </a>
    </div>
  </div>
</footer>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap');

/* Custom font for the entire page */
.container {
  font-family: 'Poppins', sans-serif;
  /* background-color: #f7f7f7; Soft light background */
}

/* Color Palette */
.bg-teal-500 {
  background-color: #00bfae; /* Teal primary color */
}

.bg-gray-50 {
  background-color: #f9fafb; /* Light Gray */
}

.bg-gray-100 {
  background-color: #f3f4f6; /* Lighter Gray */
}

.text-gray-800 {
  color: #2d3748; /* Dark Gray Text */
}

.text-teal-500 {
  color: #00bfae; /* Teal color for links */
}

.text-white {
  color: #ffffff; /* White text for CTAs and headers */
}

.bg-hover {
  background-color: #edf2f7; /* Light gray on hover */
}

.shadow-lg {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

</style>
