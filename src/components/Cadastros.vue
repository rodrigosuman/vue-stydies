<template>
  <div id="cadastros">
    <b-card title="Cadastros realizados">
      <b-table responsive striped hover :items="cadastros" />
    </b-card>
  </div>
</template>

<script>
export default {
  name: "cadastros",
  data: () => ({
    cadastros: [{}]
  }),
  mounted() {
    this.cadastros = this.$store.state.cadastros;
  }
};
</script>

<style></style>
