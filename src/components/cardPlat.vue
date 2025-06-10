<template>
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        
        <div v-for="(plat, index) in plats" :key="index"
        class="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden">

        <img :src="plat.image" :alt="plat.nom" class="w-full h-52 object-cover" />
        
        <div class="p-4">
            <h3 class="text-xl font-semibold text-orange-600">{{ plat.nom }}</h3>
            <p class="text-sm text-gray-700 mt-2">{{ plat.description }}</p>
        </div>
    </div>
    </div>
</template>

<script setup>

const props = defineProps({
    plats: Array
})
</script>