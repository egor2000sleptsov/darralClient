<template>
  <v-col cols="3">
    <v-card
        outlined

    >
      <v-card-title style="background-color: beige">{{ el.name }}</v-card-title>
      <v-card-text v-if="el.desc">
        <v-container>{{ el.desc }}</v-container>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-row justify="space-between">
          <v-col cols="6">
            {{ el.price }}р {{ el.weight }}г
          </v-col>
          <v-spacer/>
          <v-col cols="6">
            <v-btn
                icon
                @click="this.edit"
            >
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
                icon
                @click="this.delete"
            >
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "PositionCard",
  methods: {
    delete() {
      this.$api.positions.delete({
        subMethod: 'byID',
        id: this.el.id
      })
      this.loadPositions({subMethod: 'all'})
    },
    edit() {
      console.log('edit')
    },
    ...mapActions({
      loadPositions: 'positions/loadPositions'
    })
  },
  computed: {
    ...mapGetters({
      positions: 'positions/getPositions'
    })
  },
  props: {
    el: {
      type: Object,
      default: function () {
        return {
          name: 'Empty'
        }
      }
    },
  },
}
</script>

<style scoped>

</style>
