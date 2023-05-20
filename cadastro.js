const botao = document.getElementById('cadastrar')
  
botao.addEventListener('click', () => {
    const imoveis = [];

    const imovel = {};
    imovel.proprietario = document.getElementById('nomeDoProprietario').value;
    imovel.quartos = document.getElementById('quantidadeDeQuartos').value;
    imovel.banheiros = document.getElementById('quantidadeDeBanheiros').value;
    imovel.garagem = document.getElementById('possuiGaragem').value;

    imoveis.push(imovel)
    alert('Imóvel Cadastrado com sucesso');
    console.log(imoveis);

    localStorage.setItem('imovel', JSON.stringify(imovel))
})