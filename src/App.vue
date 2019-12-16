<template>
  <b-container id="app">
    <div class="text-center">
      <h1 class="display-4">{{ title }}</h1>
    </div>

    <Formulario />
    <Cadastros />
  </b-container>
</template>

<script>
import Formulario from "./components/Formulario";
import Cadastros from "./components/Cadastros";

export default {
  name: "app",
  components: {
    Formulario,
    Cadastros
  },
  data: () => ({
    title: "Estudos Vue.js"
  })
};
</script>

<style></style>
