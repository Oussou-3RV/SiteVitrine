<template>
   <Header />
   <main class="flex-1 mt-[80px]  "> <!-- on garde de l'espace pour le header fixe -->
      <RouterView />
      <div class="bg-orange-50 py-20 px-6 text-center">
         <About/>
      </div>
   </main>
   <Footer />
</template>

<script setup>

import Header from './components/headerr.vue';
import Footer from './components/Footer.vue';
import About from './Views/About.vue';
</script>
