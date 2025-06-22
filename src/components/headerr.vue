<template>
    <header class=" text-black sticky relative w-full shadow-md top-0 z-40 font-mono" :class="{beFixed: menuOpen}">
        <div class="max-w-7xl sticky top-0 mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center" >
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

        <!-- Menu mobile -->
        <div v-if="menuOpen"
            class="lg:hidden text-xl fixed w-full text-red-600 pt-40 bg-white h-screen flex flex-col items-center space-y-8 z-50">
            <RouterLink @click="closeMenu" to="/" class="block hover:text-green-600">Accueil</RouterLink>
            <RouterLink @click="closeMenu" to="/menu" class="block hover:text-green-600">Menu</RouterLink>
            <RouterLink @click="closeMenu" to="/about" class="block hover:text-green-600">À propos</RouterLink>
            <RouterLink @click="closeMenu" to="/contact" class="block hover:text-green-600">Contact</RouterLink>
        </div>

        <!-- <div class="text-center py-10 mt-9  ">
            <h1 class="text-5xl  font-bold text-orange-600  ">ANTALIOU</h1>
            <p class="mt-4 text-lg test">Savourez les meilleurs plats africains faits maison !</p>
        </div> -->
        

    </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import RouterLinkk from './RouterLinkk.vue'

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

/* header {
    background-image: url('/public/bg-header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
} */
.beFixed{
    top: 0px;
    background-color: white;
    background-position: fixed;
   
}
</style>