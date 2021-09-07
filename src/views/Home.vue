<template>
  <v-container
  >
    <v-row>
      <div class="black--text text-md-h3">Меню</div>
    </v-row>
    <v-row>
      <v-col cols="2">
        <Toolbar/>
      </v-col>
      <v-col cols="10">
        <v-container fluid>
          <v-row dense>
            <PositionCard
                v-for="el in positions"
                :key="el.id"
                :el="el"
            />
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Toolbar from "../components/Toolbar";
import {mapActions, mapGetters} from 'vuex'
import PositionCard from "../components/PositionCard";

export default {
  created() {
    this.loadCategories({
      subMethod: 'all'
    })
    this.loadPositions({
      subMethod: 'all'
    })
  },
  name: 'Home',
  data() {
    return {}
  },
  components: {PositionCard, Toolbar},
  methods: {
    ...mapActions({
      loadCategories: 'categories/loadCategories',
      loadPositions: 'positions/loadPositions'
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories',
      positions: 'positions/getPositions'
    })
  },
}
</script>
