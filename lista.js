const imoveis = document.querySelector('.imoveis');

onload = () => {
    let imoveisLocalStorage= localStorage.getItem('imovel');
    const imoveisObj = JSON.parse(imoveisLocalStorage)
    console.log(imoveisObj);
}