module.exports = {
  async ordenarLista(req, res) {
    const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
    const { id } = req.query;
    const index = parseInt(id);
    if (Number.isNaN(index) || index >= lista.length) {
      return res.status(406).send("Parametro inválido");
    }
    let temp = lista[0];
    lista[0] = lista[index];
    lista[index] = temp;
    return res.status(200).send(lista);
  },
};
