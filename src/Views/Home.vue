<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-orange-50 py-20 px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-orange-600"></h1>
      <p class="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
        Découvrez les saveurs authentiques de l’Afrique dans chaque plat fait maison. Livraison disponible sur commande !
      </p>
      <RouterLink
        to="/menu"
        class="inline-block mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-orange-700 transition"
      >
        Voir notre menu
      </RouterLink>
    </section>

    <!-- Section Plats Populaires -->
    <section class="py-16 px-6 bg-white">

      <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">Nos plats les plus appréciés</h2>

      <!-- affiche les plats -->
      <cardPlat :plats="plats"/>

    </section>
  </div>
</template>

<script setup>

import cardPlat from '../components/cardPlat.vue';

const plats = [
  {
    nom: 'Poulet Yassa',
    description: 'Poulet mariné aux oignons et citron, accompagné de riz blanc.',
    image: '/public/yassa.jpg'
  },
  {
    nom: 'tchep',
    description: 'Riz au poisson, légumes mijotés, recette traditionnelle sénégalaise.',
    image: '/public/tchep.webp'
  },
  {
    nom: 'Alloco et oeuf',
    description: 'Bananes plantain frites servies avec une sauce épicée.',
    image: '/public/alloco.webp'
  }
]
</script>
