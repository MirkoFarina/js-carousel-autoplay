/*                                  DATI                                */
const arrayImg = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
]
// CREATO UN INTERVALLO PER SCEGLIERE AUTOMATICAMENTE OGNI QUANTO DEVONO CAMBIARE LE IMG
let timeInterval = 2 ;

// "CHIAMO" I MIEI CONTENITORI DELLE IMG
const containerImgLg = document.querySelector('.img-lg');
const containerImgXs = document.querySelector('.img-xs');

// CREO LE COSTANTI CHE POI USERO' PER INTERAGIRE CON L'HTML
let imgLg = "";
let imgXs = "";

// CREO IL CONTATORE PER LA GESTIONE DELLE CLASSI
let counterImg = 0;


// "SCOMPONGO" L'ARRAY USANDO IL CICLO FOR E STAMPO I TAG CHE MI SERVONO
for(let i = 0; i < arrayImg.length; i++){
  //CREO IL TAG IMG PER IL BOX XL
  imgLg = `
  <img class="xl hide" src="img/${arrayImg[i]}" alt="${arrayImg[i]}">
  `;
  //CREO IL TAG IMG PER IL BOX XS (THUMBNAILS)
  imgXs = `
  <img class="xs" src="img/${arrayImg[i]}" alt="${arrayImg[i]}">
  `;
  
  // STAMPO I TAG CREATI NEI BOX NEL HTML
  containerImgLg.innerHTML += imgLg;
  containerImgXs.innerHTML += imgXs;
}

// PRENDO IL COINTAINER CHE UTILIZZERO' PER L'OVER
const carousel = document.querySelector('.carousel');

// CREO LA SITUAZIONE DI DEFAULT CHE MI OCCORRE:
// PRENDO I CONTENITORI CHE MI SERVIRANNO
const arrayImgLg = document.getElementsByClassName('xl');
const arrayImgXs = document.getElementsByClassName('xs');

// AGGIUNGO E TOLGO CLASSI PER AVERE LA VISUALIZZAZIONE DI DEFAULT
arrayImgLg[counterImg].classList.remove('hide');
arrayImgLg[counterImg].classList.add('active');

arrayImgXs[counterImg].classList.add('active');

// CREO DUE COSTANTI CON I MIEI BOTTONI PER SCROLLARE LE IMMAGINI
const up = document.querySelector('.btn.up');
const down = document.querySelector('.btn.down');
// CREO LA FUNZIONE TIMING PER FAR SI CHE GIRI DA SOLO 
let startTiming;


// CREATO UN LOOP CHE MI FA GIRARE LE IMG NEL CAROSELLO AUTOMATICAMENTE
startTiming = setInterval(function(){
upDown(true);
}, timeInterval * 1000)

// CREATO UN EVENTO CHE QUANDO SONO SOPRA IL CAROSELLO MI STOPPA IL TIMING E QUINDI NON SCORRONO PIU' DA SOLE E POSSO ANCHE PREMERE I MIEI UP E DOWN PER FARLE SCORRERE DA SOLO SENZA CHE SUCCEDA NULLA
carousel.addEventListener('mouseover', function(){
  clearInterval(startTiming);
})

// CREATO UN ALTRO EVENTO ALL'USCITA DEL MOUSE SUL CAROSELLO CHE MI FA RIPARTIRE IL LOOP AUTOMATICO 
carousel.addEventListener('mouseout', function(){
startTiming = setInterval(function(){
  upDown(true);
  }, timeInterval * 1000)
})

down.addEventListener('click',function(){
  upDown(true);
})

up.addEventListener('click', function (){
  upDown(false);
})



function upDown(isDown){
  arrayImgLg[counterImg].classList.remove('active');
  arrayImgLg[counterImg].classList.add('hide');

  arrayImgXs[counterImg].classList.remove('active');

  if(isDown){
    counterImg++;
    if(counterImg === arrayImg.length) counterImg = 0;
  }else {
    counterImg--;
    if(counterImg < 0) counterImg = arrayImg.length -1;
  }

  arrayImgLg[counterImg].classList.remove('hide');
  arrayImgLg[counterImg].classList.add('active');

  arrayImgXs[counterImg].classList.add('active')
}






