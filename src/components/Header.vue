<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <header class="flex items-center justify-between py-5 px-9 bg-red-300 ">

        <RouterLink to="/">Garba Shogrun</RouterLink>

        <nav class="flex gap-2">
            <RouterLink to="/Home">Home</RouterLink>
            <RouterLink to="/Menu">Menu</RouterLink>
            <RouterLink to="/About">A propos</RouterLink>
            <RouterLink to="/Contact">Contact</RouterLink>
        </nav>
    </header>

</template>
<style>

</style>