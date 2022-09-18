const veiculos = [];
executarMenu()

function executarMenu() {
  const resultado = prompt(`
    (1) - Cadastrar automóvel;
    (2) - Pesquisar automóvel;
    (3) - Excluir automóvel;
    (0) - Sair;
`)

if(resultado == "1") {
cadastrarVeiculo()
executarMenu()
}

if(resultado == "2") {
pesquisarVeiculo()
executarMenu()
}


if(resultado == "3") {
exluirVeiculo()
executarMenu()
}

}

function cadastrarVeiculo() {
  let placa = prompt('Digite a placa do veiculo')

  let isNovaPlaca = true

veiculos.forEach(veiculo => {
  if(veiculo.placa == placa) {
    isNovaPlaca = false
}
})

if(isNovaPlaca) {
  const veiculo = {
    placa: placa,
    modelo: prompt('Digite o modelo do veiculo'),
    marca: prompt('Digite a marca do veiculo'),
    ano: prompt('Digite o ano do veiculo'),
}

veiculos.push(veiculo)
console.log(veiculos)
} else {
  alert('Placa já cadastrada!')
}
}

function pesquisarVeiculo() {
  let placa = prompt('Digite a placa do veiculo');
  let isExiteVeiculo = false


veiculos.forEach(veiculo => {
  if(veiculo.placa == placa) {
    isExiteVeiculo = true
      alert(`${veiculo.placa} - ${veiculo.modelo} -
${veiculo.ano} - ${veiculo.marca}`)
}
})

if(!isExiteVeiculo) {
  alert('Placa não encontrada!')
}

}

function exluirVeiculo() {
  let placa = prompt('Digite a placa que deseja excluir!')
  let isExiteVeiculo = false


veiculos.forEach((veiculo, index) => {
if(veiculo.placa == placa) {
isExiteVeiculo = true
veiculos.splice(index, 1)
alert('Veículo excluido!')
}
})

if(!isExiteVeiculo) {
  alert('Placa não encontrada!')
}
}