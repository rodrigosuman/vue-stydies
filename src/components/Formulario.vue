<template>
  <b-card id="formulario" title="Cadastro">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.nome"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        description="Somente números"
        id="input-group-1"
        label="Telefone:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.telefone"
          type="text"
          required
          @keypress="maskPhone"
          :maxlength="15"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        description="Somente números"
        id="input-group-1"
        label="Cep:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.cep"
          type="text"
          required
          :maxlength="9"
          @keypress="maskCep"
          @blur="getAddress"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Cidade:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.cidade"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-button pill block type="submit" variant="info">Enviar</b-button>
    </b-form>
  </b-card>
</template>

<script>
import cepServices from "../services/Cep";
import { maskPhone, maskCep } from "../utils/masks";

export default {
  name: "formulario",
  data: () => ({
    form: {
      email: "",
      nome: "",
      telefone: "",
      cep: "",
      cidade: ""
    }
  }),
  methods: {
    maskPhone() {
      this.form.telefone = maskPhone(this.form.telefone);
    },
    maskCep() {
      this.form.cep = maskCep(this.form.cep);
    },
    getAddress() {
      const { getAddress } = cepServices;
      const { cep } = this.form;

      cep.length === 9
        ? getAddress(cep)
            .then(res => (this.form.cidade = res.data.localidade))
            .catch(err => alert(err))
        : () => {};
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch("addCadastro", this.form);
      this.reset();
    },
    reset() {
      this.form = {
        email: "",
        nome: "",
        telefone: "",
        cep: "",
        cidade: ""
      };
    }
  }
};
</script>

<style></style>
