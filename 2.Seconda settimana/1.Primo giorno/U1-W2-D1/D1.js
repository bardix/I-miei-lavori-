/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Javascript permette 5 tipi di dati primitivi e 1 dato complesso:

 I dati primitivi:
 1.Numeri             I numeri possono essere decimali, interi e negativi. Un numero particolare è il NaN che è un valore numerico non definito.
 2.Stringhe           Le stringhe sono delle sequenze di caratteri definiti da uno o due apici all'inizio e alla fine della frase o parola 
 3.booleani           I booleani assumono solo due valori, true (vero) e false (falso) 
 4.null               Il valore null non rientra nei dati prima elencati, è un dato che ha il valore di essere nullo
 5.undefind           Rappresenta un valore che non esiste, non prende neanche il valore di null

 il dato complesso è l'oggetto, che puo asumere le forme di array e funzioni. 
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = 'Davide';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

 
var a = 12;
var b = 20;
var c; 

c = a + b;


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 
var x = 12;


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var myName = 'Lombroni';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


console.log((x + 4));


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 ='john'
var name2= 'John'

console.log (name1 == name2);
console.log(name1!=name2);

console.log(name1 == name2.toLowerCase());