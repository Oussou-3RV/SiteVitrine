<template>
    <header class="bg-white shadow-md fixed top-0 w-full   z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold text-orange-600">
          <RouterLink to="/">Shogroun</RouterLink>
        </div>
  
        <!-- Menu desktop -->
        <nav class="hidden lg:flex space-x-6 ">
          <RouterLink to="/" class="hover:text-orange-600">Accueil</RouterLink>
          <RouterLink to="/menu" class="hover:text-orange-600">Menu</RouterLink>
          <RouterLink to="/about" class="hover:text-orange-600">À propos</RouterLink>
          <RouterLink to="/contact" class="hover:text-orange-600">Contact</RouterLink>
        </nav>
  
        <!-- Bouton menu mobile -->
        <button @click="menuOpen = !menuOpen" class="lg:hidden focus:outline-none">
          <span v-if="!menuOpen" class="text-2xl">☰</span>
          <span v-else class="text-xl">✕</span>
        </button>
      </div>
  
      <!-- Menu mobile -->
      <div v-if="menuOpen" class="lg:hidden text-xl text-white bg-red-300 h-screen flex flex-col justify-center items-center px-6 pb-4 space-y-8 ">
        <RouterLink @click="closeMenu" to="/" class="block hover:text-orange-600">Accueil</RouterLink>
        <RouterLink @click="closeMenu" to="/menu" class="block hover:text-orange-600">Menu</RouterLink>
        <RouterLink @click="closeMenu" to="/about" class="block hover:text-orange-600">À propos</RouterLink>
        <RouterLink @click="closeMenu" to="/contact" class="block hover:text-orange-600">Contact</RouterLink>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
import { RouterLink } from 'vue-router'
  
  const menuOpen = ref(false)
  const closeMenu = () => {
    menuOpen.value = false
  }
  </script>
  
  <style scoped>
  /* Pour éviter que le contenu passe sous le header */
  body {
    padding-top: 80px;
  }
  </style>
  