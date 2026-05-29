

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