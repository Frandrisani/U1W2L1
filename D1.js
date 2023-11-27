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
/* SCRIVI QUI LA TUA RISPOSTA 
Per datatype intendiamo il tipo di dato che stiamo andando ad inserire all'interno di un contenitore. Per tipo, invece,
intendiamo la natura del dato e soprattutto come poter leggere ed interpretare al meglio quel dato. Ci sono 5 datatype
principali e sono: stringhe, numeri, boolean, null e undefined. Di seguito gli esempi: */
let stringa = "ciao";
let numero = 10;
let boolean = true;
let nulla = null;
let indefinito; //qui non assegnandoli un dato resta indefinto

/* ESERCIZIO 2
 Crea una variable chiamata "nome" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA
Per creare una variabile utilizziamo "let". Quindi sarà let name = 'Francesco' */
let myName = "Francesco";
console.log("Nome", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 12;
const numero2 = 20;
let somma = numero1 + numero2;
console.log("Somma =", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Andrisani";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;
console.log("Risultato sottrazioe=", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let comparazione = name1 !== name2;
console.log("I due varoli sono diversi?", comparazione);
let sonoUgualiInLowercase = name1.toLowerCase() === name2.toLowerCase();
console.log("Sono uguali in Lowercase?", sonoUgualiInLowercase);
