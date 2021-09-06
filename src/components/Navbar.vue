<template>
  <v-app-bar
      app
      dark
      color="#daa42a"
  >
      <v-toolbar-title>Home</v-toolbar-title>
    <v-spacer/>
    <v-btn icon>
      <router-link
          to="/edit"
          style="text-decoration: none;
                 color: inherit;"
      >
        <v-icon>
          mdi-pencil
        </v-icon>
      </router-link>
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
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
