<template>
  <v-app-bar
      app
      dark
      color="#daa42a"
  >
    <v-toolbar-title>Home</v-toolbar-title>
    <v-spacer/>
    <v-btn
        icon
        @click="isModalOpen=!isModalOpen"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn icon>
      <router-link
          to="/"
          style="text-decoration: none;
                 color: inherit;"
      >
        <v-icon>
          mdi-home
        </v-icon>

      </router-link>
    </v-btn>
    <Modal
        v-if="isModalOpen"
        :is-modal-open="isModalOpen"
        @close="isModalOpen=false"
    />
  </v-app-bar>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "Navbar",
  components: {Modal},
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      console.log('modal')
    }
  },
}
</script>

<style scoped>

</style>
