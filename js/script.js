"use strict";

// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// ma che per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const wrapper = document.querySelector('.wrapper');
// creo un ciclo che mi dia dei numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    // console.log(i);

    // creo un nuovo div che sarà il mio quadrato
    const myDiv = document.createElement('div');
    myDiv.className = 'square';
    // console.log(myDiv);

    // se i numeri sono divisibili sia per 3 che per 5
    if((i % 3 == 0) && (i % 5 == 0)){
        myDiv.textContent='FizzBuzz';
        myDiv.classList = 'fizzbuzz';
        // console.log(myDiv);

    // se i numeri sono divisibili per 5
    } else if(i % 5 == 0){
        myDiv.textContent='Buzz';
        myDiv.classList = 'buzz';
        // console.log(myDiv);

     // se i numeri sono divisibili per 3
    } else if(i % 3 == 0){
        myDiv.textContent='Fizz';
        myDiv.classList = 'fizz';
        // console.log(myDiv);

    // se non sono divisibili ne per 3 e nemmeno per 5
    } else{
        myDiv.append(i);
        // console.log(i + 'else');
    }

    wrapper.append(myDiv);
    // console.log(wrapper);

};
