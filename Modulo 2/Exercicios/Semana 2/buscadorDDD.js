function buscadorDeDDD(ddd) {
  switch (ddd) {
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "Sao Paulo";
    case 21:
    case 22:
    case 24:
      return "Rio de Janeiro";
    case 27:
    case 28:
      return "Espirito Santo";
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
      return "Minas Gerais";
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
      return "Paraná";
    case 47:
    case 48:
    case 49:
      return "Santa Catarina";
    case 51:
    case 53:
    case 54:
    case 55:
      return "Rio Grande do Sul";
    case 61:
      return "Distrito Federal/Goias";
    case 62:
      return "Goias";
    case 65:
    case 66:
      return "Mato Grosso";
    case 67:
      return "Mato Grosso do SUl";
    case 68:
      return "Acre";
    case 69:
      return "Rondônia";
    case 71:
    case 73:
    case 74:
    case 75:
    case 77:
      return "Bahia";
    case 79:
      return "Sergipe";
    case 81:
    case 87:
      return "Pernambuco";
    case 82:
      return "Alagoas";
    case 83:
      return "Paraíba";
    case 84:
      return "Rio Grande do Norte";
    case 85:
    case 88:
      return "Ceará";
    case 86:
    case 89:
      return "Piaui";
    case 91:
    case 93:
    case 94:
      return "Pará";
    case 92:
    case 97:
      return "Amazonas";
    case 95:
      return "Roraima";
    case 96:
      return "Amapá";
    case 98:
    case 99:
      return "Maranhão";
    default:
      console.log("DDD Inválido");
  }
}

module.exports = buscadorDeDDD;
