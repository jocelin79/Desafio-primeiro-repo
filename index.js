var frutas = new Array();
var laticínios = new Array();
var congelados = new Array();
var doces = new Array();

const buttonDefault = document.getElementById('btn');
buttonDefault.onclick = function click () {
  for (var desejo = 1, i; desejo != 2;) {
    if (i != 1) {
      desejo = prompt('Deseja adicionar algum alimento a sua lista de compras? Digiti 1 caso Sim ou 2 caso Não.')
      i = 1
    } else {
      desejo = prompt('Deseja adicionar mais algum alimento ou remover algum já listado? Digiti 1 para Adicionar, 2  para Finalizar Lista ou 3 para Remover.')
    }
    if (desejo == 1) {
      const comidaAdicionada = prompt('Qual comida deseja adicionar? Digiti o nome da comida.')
      const categoriaComidaAdicionada =  prompt("Agora, selecione a tipo dessa comida. Digiti 1 para Frutas, 2 para Laticínios, 3 para Congelados ou 4 para Doces.")
      if (categoriaComidaAdicionada == 1) {frutas.push(comidaAdicionada)}
      else if (categoriaComidaAdicionada == 2) {laticínios.push(comidaAdicionada)}
      else if (categoriaComidaAdicionada == 3) {congelados.push(comidaAdicionada)}
      else {doces.push(comidaAdicionada)}
      console.log(frutas)
      console.log(doces)
    } else if (desejo == 2 && frutas.length == 0 && laticínios.length == 0 && congelados.length == 0 && doces.length == 0) {
      alert("OK então, até a próxima!")
    } else if (desejo == 2) {
      alert(`Lista Finalizada:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)
    } else {
      const comidaRemovida = prompt((`Lista:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Digite o nome da comida que deve ser removida.`))
      if (frutas.includes(comidaRemovida)) {
        frutas.splice(frutas.indexOf(comidaRemovida),1)
      } else if (laticínios.includes(comidaRemovida)) {
        laticínios.splice(laticínios.indexOf(comidaRemovida),1)
      } else if (doces.includes(comidaRemovida)) {
        doces.splice(doces.indexOf(comidaRemovida),1)
      } else if (congelados.includes(comidaRemovida)) {
        congelados.splice(congelados.indexOf(comidaRemovida),1)
      } else {"Não foi possível encontrar o item dentro da lista!"}
    }
  }
};