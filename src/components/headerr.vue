<template>
    <header class="bg-white text-white relative shadow-md top-0 w-full h-screen z-40 font-mono" :class="{beFixed: menuOpen}">
        <div class="max-w-7xl sticky top-0 mx-auto px-4 sm:px-6 lg:px-8 py-4 border-2 border-green-600 flex justify-between items-center" >
            <!-- Logo -->
            <div class="text-3xl font-bold text-orange-600">
                <RouterLink to="/">ANTALIOU</RouterLink>
            </div>

            <!-- Menu desktop -->
            <nav class="hidden text-lg lg:flex space-x-6 z-50">
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
        <div v-if="menuOpen"
            class="lg:hidden text-xl fixed w-full text-red-600 pt-60 bg-white h-screen  flex flex-col items-center space-y-8 z-50">
            <RouterLink @click="closeMenu" to="/" class="block hover:text-green-600">Accueil</RouterLink>
            <RouterLink @click="closeMenu" to="/menu" class="block hover:text-green-600">Menu</RouterLink>
            <RouterLink @click="closeMenu" to="/about" class="block hover:text-green-600">À propos</RouterLink>
            <RouterLink @click="closeMenu" to="/contact" class="block hover:text-green-600">Contact</RouterLink>
        </div>

        <div class="text-center py-10 mt-9 border-2 border-pink-800">
            <h1 class="text-5xl  font-bold text-orange-600 ">Bienvenue chez ANTALIOU</h1>
            <p class="mt-4 text-lg">Savourez les meilleurs plats africains faits maison !</p>
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

header {
    background-image: url('/public/bg-header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.beFixed{
    position: fixed;
}
</style>