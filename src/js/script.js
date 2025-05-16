//Criando o slideShow para apresentação dos carros elétricos na página "Home"

//Declarando o array de imagens
let imagens = [
    'src/assets/1-Tesla-Model-32.jpg',
    'src/assets/seres3.avif',
    'src/assets/konaEv.avif',
    'src/assets/dolphin.jpg',
    'src/assets/jaceJS1.avif'
];

//Declarando array de legendas de cada imagem
let legendas = ['Tesla Model 3 — Foto: divulgação/Tesla ',
    'Seres 3 — Foto: divulgação/Seres',
    'Hyundai Kona EV — Foto: divulgação/Hyundai',
    'BYD Dolphin Plus — Foto: divulgação/BYD ',
    'JAC e-JS1 — Foto: divulgação/JAC'
];

//Declarando as variáveis
let i = 0; 
let tempo = 3000; //3 segundos para visualização de cada imagem

//Criando a função slideShow para as imagens e legendas
function slideShow(){
    document.getElementById('imagens').src=imagens[i];
    document.getElementById('legenda').textContent = legendas[i];
    i++;

    if(i == imagens.length){
        i = 0;
    }
   
    setTimeout("slideShow()", tempo);

}

// Criando background do quiz 
const image = ['1-Tesla-Model-32'];
document.getElementById("background").style.backgroundImage = `url('${imagens[0]}')`;

//Chamando a função
slideShow();
