const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const btnWpp = document.querySelector('#btn-Wpp')

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function SendWppMessage() {
    let DestNumber = '5585996604247';
    let mensagem = 'Olá, gostaria de saber mais sobre seus serviços de desenvolvimento web. Estou interessado em criar uma página profissional e gostaria de conversar sobre detalhes e orçamento. Aguardo seu retorno!';
    let WppUrl = 'https://wa.me/' + DestNumber + '?/text=' + encodeURIComponent(mensagem);
    window.open(WppUrl, '_blank')
}

btnWpp.addEventListener("click", SendWppMessage)