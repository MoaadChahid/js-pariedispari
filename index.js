

const inserisci = prompt('metti una parola palindroma')

function invertistringa(parola) {
    const stringa = [];

    for (let i = parola.length - 1; i >= 0; i--) {
        stringa.push(parola[i]);
    };
    return stringa.join('');
}

const parolainvertita = invertistringa(inserisci);

if (parolainvertita === inserisci) {
    console.log('Questa parola è palindroma')
} else {
    console.log('Questa parola non è palindroma')
};

console.log(parolainvertita);


///////////


function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

function pariODispari(numero) {

    if (numero % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

const sceltaUtente = prompt("Scegli pari o dispari");

const numeroUtente = parseInt(
    prompt("Scegli un numero da 1 a 5")
);

const numeroComputer = generaNumero();

console.log("Numero computer", numeroComputer);

const somma = numeroUtente + numeroComputer;

console.log("Somma:", somma);

const risultato = pariODispari(somma);

if (risultato === sceltaUtente) {
    console.log("Hai vinto");
} else {
    console.log("Ha vinto il computer");
}