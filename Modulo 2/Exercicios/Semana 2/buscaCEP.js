async function buscaCEP(cep) {
  try {
    const response = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    if (!response.ok) {
      console.log("CEP Invalido");
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if ("erro" in data) {
      console.log("CEP não encontrado");
    } else {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

buscaCEP(88040999).then((data) => console.log(data));
module.exports = buscaCEP;
