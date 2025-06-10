<template>
    <footer class="bg-gray-100 text-gray-700 py-6 mt-10 border-t absolute inset-x-0 bottom-0">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <!-- Texte gauche -->
        <p class="text-sm">&copy; {{ new Date().getFullYear() }} Shogroun. Tous droits réservés.</p>
  
        <!-- Lien téléphone -->
        <p class="text-sm mt-2 md:mt-0">
          Commandez au :
          <a href="tel:+15141234567" class="text-orange-600 hover:underline font-semibold">
            +1 514-123-4567
          </a>
        </p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  