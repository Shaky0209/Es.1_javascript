/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* In Javascript ci sono "5" tipi di dato, (qualcuno dice 6 ma mi deve spiegare qual'è il sesto.) Questi sono possono essere,
di tipo numero, stringa, undefined o NaN, null, boolean.

■ La Stringa è un dato rappresentato da una serie di caratteri (lettere e/o numeri) racchiusi da virgolette, apice o backtick. 
■ Undefined è lo stato in cui è una variabile appena è stata creata, quando ancora non le è stato assegnato nessun valore. 
insieme allo stato di "Undefined" possiamo associare lo stato "NaN", che significa "Not a Number" (ovvero non è un numero,
ma nessuno dice cos'è così da lasciare una variabile o il risultato di un'operazione in uno stato indefiniti.)
■ I dati di tipo "null" sono rappresentati da una variabile che non ha nessun valore ma allo stesso tempo è diversa da "Undefined"
in quanto è una variabile definita ma resa vuota, è possibile quindi interagire con una variabile di questo tipo in operazioni
senza ottenere come risultato "NaN".
■ I dati di tipo "boolean" possono assumere esclusivamente due tipi di valore che sono "true" o "false", si chiamano
boolean proprio per il motivo che si riferiscono alla logica booleana dove a livello logico possiamo avere come valore o "1" o "0",
allo stesso modo dei dati che possono essere contenuti nelle allocazioni di memoria come il bit o i bites, che sono riempite di 
questi valori rappresentati da uno o zero.
■ In fine abbiamo il tipo di dato "numero", che può essere una qualsiasi variabile associata ad un valore numerico non racchiuso
da apici o virgolette, altrimenti diventerebbe una stringa che contiene caratteri numerici senza assumere un valore numerico
attribuibile ad operazioni matematiche.
*/ 


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
Un oggetto in Javascript è un tipo di dato strutturato costituito da una o più coppie chiave-valore.

Es.

let phonebook = {
    name: "Girolamo",
    surname: "Seghetti",
    addres: "Torino - Via delle Magnolie, 96",
    telephone: "3471563358",
};

In questo caso una coppia chiave-valore può essere name: "Girolamo", la chiave è name, e può essere utilizzata quando dobbiamo
andare a richiamare il valore "Girolamo" , per esempio con un console.log, possiamo quindi scrivere: console.log(phonebook.name);
e come risposta in console riceveremo: Girolamo. Quindi facendo utilizzo della chiave possiamo accedere in questo caso ad una
stringa che contiene il valore desiderato.

*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.


*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let a = 12;
let b = 20;
let sum = a + b;

console.log(sum);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let x = 12;
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let nome = "Andrea";
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let subrtraction = 4 - x;

console.log(subtraction);
*/



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*

let name1 = "john"
let name2 = "John"

console.log(nome1==nome2); 

stesso risultato ottenuto con:

console.log(nome1===nome2);

si otterrà true lanciando questo comando:

console.log(name2.toLowerCase()==name1);


*/