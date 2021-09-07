<template>
  <div>
    <div class="text-lg-h5">Сортировка и фильтрация</div>
    <v-checkbox
        v-for="(value,index) in categories"
        :key="index"
        v-model="filters"
        :label="value"
        :value="value"
        dense
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Toolbar",
  data() {
    return {
      filters: []
    }
  },
  computed: {
    ...mapGetters({categories: 'categories/getCategories'})
  },
}
</script>

<style scoped>

</style>
