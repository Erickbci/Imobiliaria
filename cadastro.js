const botao = document.getElementById('cadastrar')

function cadastrar(){
    const properties = [];

    const property = {};
    property.owner = document.getElementById('nomeDoProprietario').value;
    property.bedrooms = document.getElementById('quantidadeDeQuartos').value;
    property.bathrooms = document.getElementById('quantidadeDeBanheiros').value;
    property.garage = document.getElementById('possuiGaragem').value;

    properties.push(property)
    alert('Imóvel Cadastrado com sucesso');

    localStorage.setItem('properties', JSON.stringify(properties))
}

const arrayStringProperties = localStorage.getItem('properties');
const arrayProperties = JSON.parse(arrayStringProperties)

findProperties();

function findProperties() {
    setTimeout(() => { 
    addPropertiesToScreen(arrayProperties)
    }, 1000)
}

function addPropertiesToScreen(arrayProperties) {
    const listProperties = document.getElementById('list-properties')
    arrayProperties.forEach(property => {
        
        const li = document.createElement('li');

        const owner = document.createElement('p');
        owner.innerHTML = property.owner
        li.appendChild(owner);

        const bedrooms = document.createElement('p');
        bedrooms.innerHTML = property.bedrooms
        li.appendChild(bedrooms);

        const bathrooms = document.createElement('p');
        bathrooms.innerHTML = property.bathrooms
        li.appendChild(bathrooms);

        const garage = document.createElement('p');
        garage.innerHTML = property.garage
        li.appendChild(garage);

        listProperties.appendChild(li);
    })
}