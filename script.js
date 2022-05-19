let motivos = [
    "seu cheiro",
    "seu carinho",
    "seus sentimentos",
    "seus olhos",
    "seu jeito de me  olhar ",
    "o jeito que a gente se conheceu",
    "a forma que a gente se conheceu",
    "seu jeito de se expressar",
    "seu jeito de dizer que me ama",
    "suas atitudes",
    "seu sorriso",
    "seu senso de humor",
    "sua senssibilidade",
    "seu corpo",
    "sua voz",
    "sua pele",
    "sua obsversão",
    "sua inteligencia",
    "sua força",
    "sua coragem",
    "sua determinação",
    "sua agilidade para resolver problemas",
    "sua capacidade de me inspirar",
    "suas conquistas",
    "seu amor",
    "seus sonhos de ter um futuro comigo",
    "sua vontade",
    "sua habilidade em se comunicar",
    "suas covinhas",
    "sua comprenssão",
    "sua safadeza",
    "seu desejo por mim",
    "sua saudade de mim",
    "seus sentimentos",
    "sua habilidade logica",
    "sua coragem de me dizer tudo",
    "sua sinceridade",
    "sua fragilidade em alguns casos",
    "sua criatividade",
    "sua habilidade em me fazer rir",
    "sua confiança em me fazer acreditar",
    "suas palavras ao me fazer chorar",
    "seu desejo de amar",
    "seu desejo de ser sempre melhor",
    "sua garra de buscar seus sonhos",
    "sua rotina puxada demostrando força todos os dias",
    "sua fraqueza a certas investidas minhas rsrs",
    "seu sono que me faz querer dormir do seu lado todos os dias",
    "seus presentes",
    "seu desejo de conquistar",
    "VOCÊ QUE ME TRAZ MAIS AMOR ",
];


let btnProximo = document.querySelector('#proximo');
let btnAnterior = document.querySelector('#anterior');
let displayMotivo = document.querySelector('#motivoDisplay');
let contadorDisplay = document.querySelector('#contador');
let contador = 0 ;


btnProximo.addEventListener('click',proximo);
btnAnterior.addEventListener('click',anterior);

function verifica() {
 if (contador < 0) {
     contador = 0;
 }
 if (contador >= 50) {
     contador = 50;
 }
}


function renderiza() {
    contadorDisplay.innerText = `#${contador}`
    displayMotivo.innerText = motivos[contador]
}

function proximo() {
    contador += 1;
    verifica();
    renderiza();
}

function anterior() {
    contador -= 1;
    verifica();
    renderiza();
}


