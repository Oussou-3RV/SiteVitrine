<template>
  <section class="py-16 px-6 bg-orange-50 min-h-screen">
    <div class="max-w-2xl mx-auto">

      <h1 class="text-4xl font-bold text-center text-orange-600 mb-6">Contactez-nous</h1>
      <p class="text-center text-gray-700 mb-10">
        Pour toute commande ou question, remplissez le formulaire ci-dessous ou appelez-nous directement.
      </p>

      <!-- Numéro de téléphone -->
      <div class="text-center mb-8">
        <p class="text-lg">📞 Appelez-nous au : 
          <a href="tel:+15141234567" class="text-orange-700 font-semibold hover:underline">
            +1 873 307 11-62
          </a>
        </p>
      </div>

      <!-- Formulaire de contact -->
      <form @submit.prevent="envoyerMessage" class="space-y-6 bg-white p-6 rounded-2xl shadow">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input v-model="nom" type="text" required class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input v-model="telephone" type="tel" required class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea v-model="message" rows="4" required class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
        </div>

        <button type="submit" class="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition">
          Envoyer
        </button>
      </form>

      <!-- Message de confirmation -->
      <p v-if="envoye" class="text-green-600 mt-6 text-center font-semibold">
        ✅ Votre message a bien été envoyé !
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const nom = ref('')
const telephone = ref('')
const message = ref('')
const envoye = ref(false)

const envoyerMessage = () => {
  // Ici on simule l’envoi (pas de backend)
  console.log('Message envoyé :', nom.value, telephone.value, message.value)
  envoye.value = true

  // Réinitialisation du formulaire
  nom.value = ''
  telephone.value = ''
  message.value = ''

  // Cacher le message après 3 secondes
  setTimeout(() => {
    envoye.value = false
  }, 3000)
}
</script>
