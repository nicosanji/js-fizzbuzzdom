// dichiaro la const(variabile) container

const container = document.querySelector('.container');

// CREO il ciclo da 1 a 100

for (let i = 1; i <= 100; i++) {

    // dichiaro la let(variabile) box vuota(*) 
    let boxColor = "";
    // dichiaro la let(variabile) testo = "i"
    let boxText = i;

    // CREO le condizioni che aggiungono uno stile e un testo al box

    // 1^ condizione = numeri divisibili sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        boxColor = "box-fizzbuzz";
        boxText = "fizz buzz";

        // 2^ condizione = numeri divisibili per 3
    } else if (i % 3 === 0) {
        boxColor = "box-fizz";
        boxText = "fizz";

        // 3^ condizione = numeri divisibili per 5
    } else if (i % 5 === 0) {
        boxColor = "box-buzz";
        boxText = "buzz";
    }

    // dichiaro e creo l'elemento "box" HTML con un DIV
    const box = document.createElement("div");
    // aggiungo la classe "box/css" al mio div 
    box.classList.add("box");
    // aggiungo il testo al mio box
    box.textContent = boxText;

    // CREO la condizione necessaria ad applicare i colori corretti(*)
    if (boxColor) {
        box.classList.add(boxColor);
    }

    // "APPENDO/aggiungo" il box al container del mio HTML (visualizza)
    container.append(box);

}





