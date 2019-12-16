import api from "../../library/api";

export default {
  getAddress: async cep =>
    await api.get(`https://viacep.com.br/ws/${cep}/json/`)
};
