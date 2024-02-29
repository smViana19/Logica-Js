//questao 1

let Arco_iris = ["Vermelho", "Laranja", "Marrom", "Azul"];

Arco_iris.splice(2, 1);

Arco_iris.splice(3, 0, "Amarelo", "Verde", "Roxo");
console.log(Arco_iris);

//questao 2

function formatarEndereco() {
  return `O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua}, nº ${endereco.numero}.`;
}

var endereco = {
  rua: "Itajubá",
  numero: 230,
  bairro: "Floresta",
  cidade: "Belo Horizonte",
  uf: "MG",
};
console.log(formatarEndereco(endereco));

//questao 3
function temHabilidade(habilidade) {
  return habilidade.indexOf("JavaScript") !== -1;
}

var habilidade = ["JavaScript", "ReactJs", "ReactNative", "Angular"];
console.log(temHabilidade(habilidade));

//questao 4
function experiencia(anos) {
  var anosEstudos = parseInt(document.getElementById("anoEstudo").value);

  if (anosEstudos <= 1) {
    alert("Junior");
  } else if (anosEstudos >= 2 && anosEstudos <= 3) {
    alert("Pleno");
  } else if (anosEstudos > 3 && anosEstudos <= 6) {
    alert("Senior");
  } else if(anosEstudos >= 7) {
    alert("Mestre Jeddi");
  } else {
    alert("Valor inexistente");
  }
}

//questao 5
var usuarios = [
  {
    nome: "Gabriel",
    habilidades: ["JavaScript", "ReactJs", "Redux"],
  },
  {
    nome: "Lara",
    habilidades: ["Java", "PHP", "Laravel"],
  },
];

function mostrarHabilidades() {
  let resultado = "";

  for (const i of usuarios) {
    resultado += `O(${i.nome} possui as habilidades: ${i.habilidades.join(
      ", "
    )}, \n `;
  }
  return resultado;
}

console.log(mostrarHabilidades());

//questao 6
//declaraçao de array de objetos
var pessoas = [ 
  {
    nome: "Samuel",
    idade: 18,
    rg: 123456,
  },
  {
    nome: "Marcela",
    idade: 14,
    rg: 654321,
  },
  {
    nome: "Ana Julia",
    idade: 19,
    rg: 321654,
  },
  {
    nome: "Ana Paula",
    idade: 42,
    rg: 456321,
  },
  {
    nome: "Giovanna",
    idade: 17,
    rg: 213546,
  },
  {
    nome: "Márcia",
    idade: 42,
    rg: 612534,
  },
  {
    nome: "Isabella",
    idade: 18,
    rg: 436512,
  },
  {
    nome: "Maria Clara",
    idade: 5,
    rg: 213456,
  },
  {
    nome: "João Vitor",
    idade: 12,
    rg: 1233456,
  },
  {
    nome: "Vitor",
    idade: 22,
    rg: 123452,
  },
];

var maiorIdade = pessoas.filter(function (obj) {
  return obj.idade >= 18;
}); //a funçao retornará o valor que esta pedindo  Pode usar o => ou o function
console.log(maiorIdade);



