/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var a = 5;
var b = 6; 

if(a > b ) { 
  console.log("a è maggiore di b");
} else {
  console.log("b è maggiore di a");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var num1=3;
var cinque= 5; 

if (num1 != cinque){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
var numero = 10
 {
  if (numero % 5 === 0) {
      console.log(numero + " è divisibile per 5");
  } else {
      console.log(numero + " non è divisibile per 5");
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var num3 = 10 
var num4 = 8 

  if (num3=== 8 || num4 === 8) {
      console.log("uno dei 2 è uguale a 8");
  }
  
  if (num3 + num4 === 8) {
    console.log("la loro somma è uguale a 8");
  }

  if (num3 - num4 === 8) {
    console.log("la loro sottrazione è uguale a 8");
  }


/*
 ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.

var totalShoppingCart = 49;

var costoSpedizione = (totalShoppingCart >= 50) ? 0 : 10;

if (totalShoppingCart >= 50) {
  console.log("spedizione gratuita")
} else {
  console.log ("il costo totale è:" +  (totalShoppingCart + costoSpedizione));
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = 40;

var costoSpedizione = (totalShoppingCart >= 50) ? 0 : 10;

var scontoblackfriday = 0;

var blackfriday = 1;

if(blackfriday = 1){
  totalShoppingCart = scontoblackfriday * 0.20;
}

if (totalShoppingCart >= 50) {
  console.log("spedizione gratuita")
} else {
  console.log ("il costo totale è:" +  (totalShoppingCart + costoSpedizione));
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


let num6 = 17;
let num7 = 9;
let num8 = 40;


if (num6 >= num7 && num6 >= num8) {
    if (num7 >= num8) {
        console.log(num6, num7, num8);
    } else {
        console.log(num6, num8, num7);
    }
} else if (num7 >= num6 && num7 >= num8) {
    if (num6 >= num8) {
        console.log(num7, num6, num8);
    } else {
        console.log(num7, num8, num6);
    }
} else {
    if (num6 >= num7) {
        console.log(num8, num6, num7);
    } else {
        console.log(num8, num7, num6);
    }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const x = 10;

if(typeof x === number ) { console.log( x, "x è un numeroo ");}
else {console.log (x, "x non è un numero");}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

 let numerooo = 10 

  if (numerooo % 2 === 0) {
      console.log("Il numero è pari");
  } else {
       console.log("Il numero è dispari");
  }



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/



me.skills.pop();
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri = [];
numeri.push(1,2,3,4,5,6,7,8,9,10);





/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/


numeri[numeri.length - 1] = 100;
console.log(numeri);

