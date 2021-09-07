<template>
  <v-dialog
      persistent
      transition="dialog-top-transition"
      max-width="600px"
      v-model="isModalOpen"
  >
    <v-card>
      <v-card-title>
        {{ isPosition ? 'Позиция' : 'Категория' }}
        <v-alert
            dense
            dismissible
            type="success"
            v-if="isSuccess"
        >Данные успещно сохранены
        </v-alert>
      </v-card-title>

      <v-card-text></v-card-text>
      <v-container fluid>
        <v-form>
          <v-text-field
              label="Название"
              v-model="form.name"
          />
          <v-text-field
              v-if="isPosition"
              label="Описание"
              v-model="form.desc"
          />
          <v-text-field
              v-if="isPosition"
              label="Цена"
              v-model="form.price"
          />
          <v-text-field
              v-if="isPosition"
              label="Вес"
              v-model="form.weight"
          />
          <v-select
              label="Категория"
              v-if="isPosition"
              :items="categories"
              v-model="form.category"
          />
        </v-form>
      </v-container>
      <v-divider></v-divider>
      <v-card-title>
        <v-btn text @click="mode = isPosition?'category' : 'position'">
          {{isPosition ? 'Категория' : 'Позиция'}}
        </v-btn>
        <v-spacer/>
        <v-btn outlined @click="$emit('close')">Закрыть</v-btn>
        <v-btn outlined @click="this.test">тест</v-btn>
        <v-btn outlined @click="formSubmit">Подтвердить</v-btn>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
//TODO:Сделай валидацию
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Modal",
  data() {
    return {
      mode: 'position',
      isSuccess: false,
      form: {
        name: '',
        desc: '',
        price: 0,
        weight: 0,
        category: null
      }
    }
  },
  methods: {
    test() {
      console.log(this.categoriesNative.find(el => el.name === this.form.category))
    },
    close() {
      this.$emit('close')
    },
    formSubmit() {
      if (this.isPosition) {
        this.addPosition({
          data: {
            name: this.form.name,
            desc: this.form.desc,
            price: this.form.price,
            weight: this.form.weight,
            category: this.categoriesNative.find(el => el.name === this.form.category).id
          }
        }).then(() => {
          this.isSuccess = true
          this.loadPositions({subMethod: 'all'})
          setTimeout(() => { this.isSuccess = false}, 3000)
        })

      } else {
        this.addCategory({
          data: {
            name: this.form.name
          }
        }).then(() => this.loadCategories({
          subMethod: 'all'
        }))
      }
    },
    ...mapActions({
      addCategory: 'categories/addCategory',
      loadCategories: 'categories/loadCategories',
      addPosition: 'positions/addPosition',
      loadPositions: 'positions/loadPositions'
    })
  },
  computed: {
    isPosition() {
      return this.mode === 'position';
    },
    ...mapGetters({
      categories: 'categories/getCategories',
      categoriesNative: 'categories/getCategoriesNative'
    })
  },
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>

</style>
