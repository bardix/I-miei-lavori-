

//Salviamo il nome nel localStorage
function salvaNome() {
    var nome = document.getElementById("nameInput").value;
    localStorage.setItem("nomeSalvato", nome);
    mostraNomePrecedente();
}

//Rimuoviamo il nome dal localStorage
function rimuoviNome() {
    localStorage.removeItem("nomeSalvato");
    mostraNomePrecedente();
}

//Funzione per mostrare il nome precedentemente salvato sopra l'input field
function mostraNomePrecedente() {
    var nomePrecedente = localStorage.getItem("nomeSalvato");
    var elementoNomePrecedente = document.getElementById("previousName");
    if (nomePrecedente) {
        elementoNomePrecedente.textContent = nomePrecedente;
    } else {
        elementoNomePrecedente.textContent = "Nessun nome salvato in precedenza.";
    }
}

// Mostra il nome precedentemente salvato al caricamento della pagina
mostraNomePrecedente();

// Funzione per avviare il contatore
function avviaContatore() {
    // Verifica se esiste un valore salvato in sessionStorage
    if (sessionStorage.getItem("inizioTempo")) {
        // Se esiste, calcola il tempo trascorso finora
        var inizioTempo = parseInt(sessionStorage.getItem("inizioTempo"), 10);
        var tempoCorrente = Math.floor(Date.now() / 1000); // Tempo attuale in secondi
        var tempoTrascorso = tempoCorrente - inizioTempo;
        // Aggiorna il contatore con il tempo trascorso
        document.getElementById("counter").textContent = tempoTrascorso;
    } else {
        // Se non esiste, imposta il tempo di inizio
        var inizioTempo = Math.floor(Date.now() / 1000); // Tempo attuale in secondi
        sessionStorage.setItem("inizioTempo", inizioTempo);
    }
        
    // Avvia un intervallo per aggiornare il contatore ogni secondo
    setInterval(function() {
        // Ottieni il tempo di inizio e calcola il tempo trascorso
        var inizioTempo = parseInt(sessionStorage.getItem("inizioTempo"), 10);
        var tempoCorrente = Math.floor(Date.now() / 1000); // Tempo attuale in secondi
        var tempoTrascorso = tempoCorrente - inizioTempo;
        // Aggiorna il contatore con il tempo trascorso
        document.getElementById("counter").textContent = tempoTrascorso;
    }, 1000); // Aggiorna ogni secondo
}
    
// Avvia il contatore quando la pagina è completamente caricata
window.onload = avviaContatore;