export const onlyNumber = text => text.replace(/[^0-9 ]/, "");

export const maskPhone = phone => {
  phone = onlyNumber(phone);
  phone = phone.replace(/\D/g, "");
  phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");

  phone.length === 11
    ? (phone = phone.replace(/(\d)(\d{5})$/, "$1-$2"))
    : (phone = phone.replace(/(\d)(\d{4})$/, "$1-$2"));

  return phone;
};

export const maskCep = cep => {
  cep = onlyNumber(cep);
  cep = cep.replace(/\D/g, "");
  cep = cep.replace(/^(\d{5})(\d)/g, "$1-$2");

  return cep;
};
