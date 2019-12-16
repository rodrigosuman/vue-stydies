export default {
  addCadastro(state, action) {
    state.cadastros.push(action.payload);
  }
};
