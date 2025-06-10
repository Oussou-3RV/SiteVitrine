<template>
  <section class="py-16 px-6 bg-white">
    <h1 class="text-4xl font-bold text-center mb-10 text-orange-600">Notre Menu</h1>

    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      <div
        v-for="(plat, index) in plats"
        :key="index"
        class="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <img :src="plat.image" :alt="plat.nom" class="w-full h-56 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-orange-600">{{ plat.nom }}</h2>
          <p class="text-sm text-gray-700 mt-2">{{ plat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plats = [
  {
    nom: 'Poulet Yassa',
    description: 'Poulet mariné aux oignons et citron, servi avec du riz blanc.',
    image: 'https://source.unsplash.com/featured/?african,food,yassa'
  },
  {
    nom: 'Tieboudienne',
    description: 'Riz au poisson, légumes mijotés – un classique sénégalais.',
    image: 'https://source.unsplash.com/featured/?african,food,fish'
  },
  {
    nom: 'Alloco',
    description: 'Bananes plantain frites, servies avec une sauce pimentée.',
    image: 'https://source.unsplash.com/featured/?plantain,food'
  },
  {
    nom: 'Attiéké et poisson braisé',
    description: 'Semoule de manioc et poisson grillé avec légumes.',
    image: 'https://source.unsplash.com/featured/?attieke,fish'
  },
  {
    nom: 'Mafé',
    description: 'Viande en sauce d’arachide, servie avec du riz.',
    image: 'https://source.unsplash.com/featured/?mafe,african,food'
  },
  {
    nom: 'Ndolé',
    description: 'Épinards amers aux arachides avec viande ou crevettes.',
    image: 'https://source.unsplash.com/featured/?ndole,cameroon,food'
  }
]
</script>
