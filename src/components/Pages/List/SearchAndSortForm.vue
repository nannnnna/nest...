<template>
  <div>
    <input type="text" v-model="localSearchQuery" placeholder="Поиск книг" />
    <select v-model="localSelectedSort" @change="emitChanges">
      <option value="title">Сортировка по алфавиту названий</option>
      <option value="price_asc">Сортировка по возрастанию цены</option>
      <option value="price_desc">Сортировка по убыванию цены</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    searchQuery: String,
    selectedSort: String
  },
  data() {
    return {
      localSearchQuery: this.searchQuery,
      localSelectedSort: this.selectedSort
    };
  },
  methods: {
    emitChanges() {
      this.$emit('update:searchQuery', this.localSearchQuery);
      this.$emit('update:selectedSort', this.localSelectedSort);
    }
  },
  watch: {
    searchQuery(newVal) {
      this.localSearchQuery = newVal;
    },
    selectedSort(newVal) {
      this.localSelectedSort = newVal;
    }
  }
};
</script>
