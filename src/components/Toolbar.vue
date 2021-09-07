<template>
  <div>
    <div class="text-lg-h5">Сортировка и фильтрация</div>
    <v-row
        justify="space-between"
        dense
        v-for="(value,index) in categories"
        :key="index"
    >
      <v-checkbox
          v-model="filters"
          :label="value"
          :value="value"
          dense
      />
      <v-btn
          icon
          @click="Del(value)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Toolbar",
  data() {
    return {
      filters: []
    }
  },
  methods: {
    Del(value) {
      console.log(value)
      this.$api.categories.del({
        subMethod: 'byName',
        name: value
      })
      this.loadCategories({subMethod: 'all'})
    },
    ...mapActions({
      loadCategories: 'categories/loadCategories'
    })
  },
  computed: {
    ...mapGetters({categories: 'categories/getCategories'})
  },
}
</script>

<style scoped>

</style>
