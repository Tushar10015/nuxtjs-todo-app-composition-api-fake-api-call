<template>
  <div class="container mx-auto p-5">
    <nav class="mb-5">
      <ul class="flex space-x-5">
        <li>
          <NuxtLink to="/" class="text-blue-500 hover:underline">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/aboutus" class="text-blue-500 hover:underline"
            >About Us</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/contactus" class="text-blue-500 hover:underline"
            >Contact Us</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <!-- This will display the content of the current page -->
    <NuxtPage />
  </div>
</template>

<script setup>
import "@/assets/css/global.css";
</script>
