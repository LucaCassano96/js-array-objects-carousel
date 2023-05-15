const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselContainer = document.querySelector("#container");

/* inseriamo il contenuto degli oggetti nell'html */

for (let i = 0; i < images.length; i++) {
    let objectiesimo = images[i];
    
   const image = objectiesimo.image;
   const title = objectiesimo.title;
   const text = objectiesimo.text;

   const carouselElement = `<div class="item hidden"> 
                            <img src="${image}" alt="immagine">
                            <div class="description">${title}</div>
                            <div class="text">${text}</div>
                            </div>`;
    carouselContainer.innerHTML += carouselElement;
}




/* seleziono in un array tutti gli elementi per poterli gestire */
const carouselElements = document.querySelectorAll(".item");

let activeElement = 0;

const carouselLastElement = carouselElements.length - 1;

/* inseriamo la classe active all elemento iniziale attivo */
carouselElements[activeElement].classList.add('active')

/* seleziono pulsanti avanti indietro */
const buttonIndietro = document.querySelector(".button_indietro");
const buttonAvanti = document.querySelector(".button_avanti");


if (activeElement === 0) {
    buttonIndietro.classList.add("bottone_none");
}


if (activeElement === carouselLastElement) {
    buttonAvanti.classList.add("bottone_none");
}


/* gestisco l'evento sul click avanti */
buttonAvanti.addEventListener("click", function () {

    const oldActiveElement = activeElement;

    
    activeElement = activeElement + 1;

    carouselElements[activeElement].classList.add('active')
    carouselElements[oldActiveElement].classList.remove('active')

    if (activeElement === carouselLastElement) {
        buttonAvanti.classList.add("bottone_none");
    }

    if (activeElement !== 0) {
        buttonIndietro.classList.remove("bottone_none");
    }

})


/* gestisco l'evento sul click indietro */
buttonIndietro.addEventListener("click", function () {

    const oldActiveElement = activeElement;

    activeElement = activeElement - 1;

  
    carouselElements[activeElement].classList.add('active')
    carouselElements[oldActiveElement].classList.remove('active')

   
    if (activeElement === 0) {
        buttonIndietro.classList.add("bottone_none");
    }

    if (activeElement !== carouselLastElement) {
        buttonAvanti.classList.remove("bottone_none");
    }

})

