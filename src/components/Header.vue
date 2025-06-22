

<template>
    <header class="absolute inset-0 w-full h-screen bg-cover bg-center z-50" style="background-image:url('/bg-header.jpg')">
      <div :class="['max-w-7xl mx-auto px-4 py-4 flex justify-between items-center fixed w-full z-50 transition', {
        'text-white': !scrolled, 'bg-white text-gray-800 shadow-md': scrolled
      }]">
        <!-- logo + menu burger + liens -->
            <!-- Logo -->
            <div class="text-3xl font-bold text-orange-600">
                <RouterLink to="/">ANTALIOU</RouterLink>
            </div>

            <!-- Menu desktop -->
            <nav class="hidden text-lg lg:flex space-x-6 z-50">
                <RouterLinkk to="/" label="Accueil" />
                <RouterLinkk to="/menu" label="Menu" />
                <RouterLinkk to="/about" label="À propos" />
                <RouterLinkk to="/contact" label="Contact" />
            </nav>

            <!-- Bouton menu mobile -->
            <button @click="menuOpen = !menuOpen" class="lg:hidden focus:outline-none">
                <span v-if="!menuOpen" class="text-2xl">☰</span>
                <span v-else class="text-xl">✕</span>
            </button>
      </div>
      <div class="flex flex-col justify-center items-center h-full text-center px-4">
        <h1 class="text-5xl font-bold">ANTALIOU</h1>
        <p class="mt-4 text-lg max-w-xl">Savourez les meilleurs plats africains faits maison !</p>
        <RouterLink to="/menu" class="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg">Voir le menu</RouterLink>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'


  const scrolled = ref(false)
  onMounted(() => window.addEventListener('scroll', () => scrolled.value = window.scrollY > 50))
  const menuOpen = ref(false)
  const closeMenu = () => menuOpen.value = false

  
  </script>
  
<style>

</style>