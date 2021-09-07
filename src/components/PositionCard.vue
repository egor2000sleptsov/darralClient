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
            {{ el.price }}р {{ el.weight }}гр
          </v-col>
          <v-spacer/>
          <v-col cols="6">
            <v-btn
                icon
            >
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
                icon
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
import {mapGetters} from 'vuex'

export default {
  name: "PositionCard",
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
