<template>
  <div id="cadastros">
    <b-card title="Cadastros realizados">
      <b-table
        id="table-cadastros"
        responsive
        striped
        hover
        :per-page="perPage"
        :current-page="currentPage"
        :items="cadastros"
      />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="table-cadastros"
      ></b-pagination>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "cadastros",
  data: () => ({
    cadastros: [],
    perPage: 5,
    currentPage: 1
  }),
  mounted() {
    this.cadastros = this.$store.state.cadastros;
  },
  computed: {
    rows() {
      return this.cadastros.length;
    }
  }
};
</script>

<style></style>
