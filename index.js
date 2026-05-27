

const inserisci = prompt('metti una parola palindroma')

const parolautente = [];

function invertistringa() {
    for (let i = inserisci.length - 1; i >= 0; i--) {
        parolautente.push(inserisci[i]);
    };

    const parolainvertita = parolautente.join('');

    console.log(parolainvertita);
}


