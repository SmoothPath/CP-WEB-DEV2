//Criando o slideShow para apresentação dos carros elétricos na página "Home"

//Declarando o array de imagens
let imagens = [
    'src/assets/seres3.avif',
    'src/assets/konaEv.avif',
    'src/assets/dolphin.jpg',
    'src/assets/jaceJS1.avif'
];

//Declarando as variáveis
let i = 0; 
let tempo = 3000; //3 segundos para visualização de cada imagem

//Criando a função slideShow
function slideShow(){
    document.getElementById('imagens').src=imagens[i];
    i++;

    if(i == imagens.length){
        i = 0;
    }
   
    setTimeout("slideShow()", tempo);
}

//Chamando a função
slideShow();
