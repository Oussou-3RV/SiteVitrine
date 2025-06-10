
<template>
    <Header />
    <main class="flex-1 mt-[80px]"> <!-- on garde de l'espace pour le header fixe -->
      <RouterView />
    </main>
    <Footer />
</template>

<script setup>

import Header from './components/headerr.vue';
import Footer from './components/Footer.vue';
</script>


