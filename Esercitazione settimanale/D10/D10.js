/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20; // creo una variabile 
console.log(sum) // controllo in console il risultato 

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21); // utilizzo il metodo math.random che restituisce un valore casuale e lo moltiplichimo per 21 per avere il range di numeri, utilizziamo math.floor per arrotondare il numero.
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let  me = {               // creo un oggetto con il mio nome, il mio cognome e la mia età
  name: "Davide",
  surname: "Lombroni",
  age: 25 
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age; // tramite l' operatore delete elimino la proprietà "age" dall'oggetto.
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "HTML", "CSS"]; // creo un array dove aggiungo la proprietà skills
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("altraSkill"); // aggiungo un elemento all'array fatto in precedenza 
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop(); // tramite il metodo pop() eliminiamo l'ulitimo elemento dell'array
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {                            // dichiariamo la funzione
  return Math.floor(Math.random() * 6) + 1;  // tramite i metodi math.floor e math.random generiamo i numeri tra 1 e 6 aggiungendo +1 alla fine facendo partire il numero da 1 
}
var numeroCasuale = dice();                  // storo la funzione e la faccio psrtire 
console.log(numeroCasuale);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) { //dichiariamo la funzione e assegnamo ad essa 2 parametri
  
  if (num1 > num2) {               // costrutto if per i due casi
      return num1;
  } else {
      return num2;
  }
}
var maggiore = whoIsBigger(35, 5);  // storo e faccio partire la funzione in una variabile dandogli 2 valori per mostrare il risultato in console
console.log(maggiore);              

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa) {                                // assegnamo alla funzione splitMe una stringa come parametro
  return stringa.split(" ");                               // tramite split divido la stringa in un array di parole 
}

var risultato = splitMe("I love coding");                  // storo e faccio partire la funzione 
console.log(risultato);                                    // guardo il risultato in console 

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne (stringa , booleano) {     // assegnamo alla funzione due parametri, dtringa e booleano
  if (booleano){                              // se booleano risulta true 
  return stringa.slice(1);                    // si taglia il primo carattere della stringa tramite il metodo slice()
  }else{ return stringa.slice ( 0, -1 );      // altrimenti si taglia l'ultimo carattere 
  }
  }

console.log(deleteOne("parola", true));
console.log(deleteOne("parola", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa) {              // Dichiaro la funzione e gli assegno il parametro stringa 
  return stringa.replace(/[0-9]/g, '');      // Trovo tutte le cifre numeriche dalla stringa e le sostituisco con una stringa vuota
}
console.log(onlyLetters("I have 4 dogs"));   // Controllo in console l'output 

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringa) {                    // Dichiaro una funzione e le assegno un parametro stringa 
  var emailvalida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    // espressione per verificare se la stringa è un valido indirizzo email
  return emailvalida.test(stringa);
}

console.log(isThisAnEmail("email@esempio.com"));    // in console questo darà true 
console.log(isThisAnEmail("email_nonvalida.com"));  // in console questo darà false


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {                          // dichiaro la funzione 
  var giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];  // creo un array con dentro tutti i giorni della settimana, ogni giorno possiede un indice dal 0 al 6 "Domenica" è 0 e "Sabat0" è 6 
  var datadioggi = new Date();                  // new Date () ci permette di ottenere la data di oggi direttamente dal browser
  var indiceGiorno = datadioggi.getDay();       // il metodo .getDay() ci restituisce l'indice da 0 a 6 corrispondente alla data odierna quindi l'indice di oggi sarà 5
  return giorniSettimana[indiceGiorno];           // associo l'indice trovato prima all'array pre costruito assocando quindi l'indice 5 a venerdi
}
console.log(whatDayIsIt());                       // controllo il risultato in console


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numero) {        // definisco la funzione e gli do come parametro il numero di volte che vogliamo fare ciclare il for
  var risultato = {                    // creo l'ggetto risultato
      sum: 0,
      values: []
  };

   for (var i = 0; i < numero; i++) {  // ciclo per azionare la funzione dice e calcolo la somma dei valori trovati
      var valore = dice();             
      risultato.values.push(valore);   
      risultato.sum += valore;         
  }
 
  return risultato;
}

console.log(rollTheDices(3));         // controllo in console il risultato

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

 function howManyDays(data) {                                                         // Definizione della funzione "howManyDays" e come parametro gli do data 
  var differenzaMillisecondi = Date.now() - data.getTime();                          // Calcolo la differenza in millisecondi tra la data fornita e la data attuale
  var giorniTrascorsi = Math.floor(differenzaMillisecondi / (1000 * 60 * 60 * 24)); // Calcolo il numero di giorni dalla differenza in millisecondi
  return giorniTrascorsi;                                                          // Restituisco il numero di giorni trascorsi
}
var dataFornita = new Date("2023-10-01");                                         // storo in una variabile una data casuale da me fornita
console.log(howManyDays(dataFornita));                                           // controllo in console il numero di giorni trascorsi dalla data fornita fino ad oggi

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {                 // definisco la funzione
  var oggi = new Date();                       // ottengo la data di oggi 
  var giornoCorrente = oggi.getDate();         // prendo dalla data di oggi il giorno in numero e lo storo in giornocorrente
  var meseCorrente = oggi.getMonth() + 1;      //prendo il mese e lo storo in mesecorrente....aggingo +1 perchè i mesi partono da 0
  

  var mioCompleanno = new Date("1998-09-27");  // inserisco la ia data di compleanno in una var
  var mioGiorno = mioCompleanno.getDate();     // ottengo il numero della data del mio compleanno e lo storo in miogiorno
  var mioMese = mioCompleanno.getMonth() + 1;  //  storo dentro miomese il mio mese di nascita prendendolo grazei a getMonth e oggiungo 1 perché i mesi partono da 0

  return giornoCorrente === mioGiorno && meseCorrente === mioMese; // confronto le date grande a strettamente uguale che mette a confornto dato e valore e all'operatore logico and che compara le variabili
}

console.log(isTodayMyBirthday()); // se oggi è il mio compleanno in console leggeremo true

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

var io = {                          // dichiaro l'oggetto inserito nella funzione
  nome: "Davide",
  cognome: "Lombroni",
  età: 25
};

function eliminaproprietà(oggetto, stringa) { // dichiaro la funzione e gli do come parametri un oggetto e una stringa 
   delete oggetto[stringa];                   // tramite delete elimino il secondo parametro stringa 
   return oggetto;
}
console.log(eliminaproprietà(io,"età")); // avvio la funzione e controllo in console il risultato, abbiamo detto al codice di eliminare la mia età


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (array) => {
  let result = { Year: 0 };                  // Imposto l'anno iniziale su 0
  array.forEach((movie) => {                 // uso il forEach su ogni movie
    let currentYear = parseInt(movie.Year);  // controllo la stringa e la commuto in numero
    if (currentYear > result.Year) {         // Confronto con il valore massimo 
      result = movie;
    }
  });

  return result;
};

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

console.log(newestMovie(movies)); 


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (array) => {  // dichiariamo la funzione che conta i film tramite il metodo length
  return array.length
}

console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (array) => {     // funzione freccia che tramie map itera su ciascun elemento dell'array contenennte solo una specifica proprieta 
  return array.map((elem) => elem.Year)
}

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (array) => {  // funzione freccia che ha come parametro un array
  return array.filter((movie) => {         // filter() si utilizza per creare un nuovo array che soddisfa determinate condizioni 
    return parseInt(movie.Year) < 2000     //  parseint trasforma year in un numero e poi si confronta con 2000
  })
}

console.log(onlyInLastMillennium(movies))


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0) //reduce riduce l'array a un singolo valore, applicando una funzione a ciascun elemento dell'array. 
}

console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (array, stringaricerca) {
  return array.filter((elem) => elem.Title.includes(stringaricerca));
}

console.log(searchByTitle(movies, 'Lord'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (array, searchString) => {
  const match = [];
  const unmatch = [];

  array.forEach((movie) => {
    if (movie.Title.includes(searchString)) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  });

  return { match, unmatch };
};

const searchResult = searchAndDivide(movies, 'Lord');
console.log(searchResult);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (array, indexToRemove) => {
    if (indexToRemove < 0 || indexToRemove >= array.length) { // Verifico se l'indice da rimuovere è valido
    console.log("Indice non valido");
    return array;
  }

  const newArray = [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];    // Crea un nuovo array che esclude l'elemento nella posizione specificata
  return newArray;
};
const indexToRemove = 2;
console.log(removeIndex(movies, indexToRemove));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectContainerElement() {
  const containerElement = document.getElementById("container");
  return containerElement;
}
const containerElement = selectContainerElement();
console.log(containerElement);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectAllTableCells() {
  const tableCells = document.querySelectorAll("td");
  return tableCells;
}
const tableCells = selectAllTableCells();
console.log(tableCells);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTextInTableCells() {
  const tableCells = document.querySelectorAll("td");

  tableCells.forEach((cell) => {
    console.log(cell.textContent);
  });
}
printTextInTableCells();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function addRedBackgroundToLinks() {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
}
addRedBackgroundToLinks();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

 /*function addNewItemToList(text) {
  const newItem = document.createElement("li");
  newItem.textContent = text;
  const list = document.getElementById("myList");
  list.appendChild(newItem);  // qui la console troverà errore  
}
*/
// addNewItemToList("Nuovo elemento");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

  /* function clearList() {
  
  const list = document.getElementById("myList"); // Seleziona la lista non ordinata con id "myList"
  
  
  list.innerHTML = ""; // Svuota la lista impostando la sua innerHTML a una stringa vuota
}

clearList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassToTableRow() {
  
  const tableRows = document.querySelectorAll("tr");    // Seleziona tutti gli elementi <tr>
  
  
  tableRows.forEach((row) => {   // Itera su tutti gli elementi <tr> e aggiungi la classe "test"
    row.classList.add("test");
  });
}
addClassToTableRow();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

