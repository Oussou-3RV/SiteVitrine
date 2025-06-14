<template>

    <RouterLink :to="to" class="hover:text-orange-600">{{label}}</RouterLink>

</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
    to:String,
    label:String
})
</script>