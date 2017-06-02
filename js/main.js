$(function(){
  $.get( "https://carlomartinucci.github.io/README.md", function(html){
    $("#content").html(marked(html.replace(/github.com\/carlomartinucci/g, "carlomartinucci.github.io")));
  });
//   var fakemd = `
// Charlie
// =======

// I miei progetti
// ---------------

// * [Gratta e perdi](https://github.com/carlomartinucci/gratta)  
//     Perché i gratta e vinci sono una tassa statale sulla stupidità

// * [Ignite@Uqido, 20 maggio 2016](https://github.com/carlomartinucci/UqidoIgnite)  
//     Illuminami, ma fai veloce. Il primo pitch di Spiegami.

// * [Template per Ignite](https://github.com/carlomartinucci/ignite_template)  
//     Il template dell'Ignite del 20 maggio, pronto per essere usato da chiunque.

// * [Ignite@Uqido, 20 luglio 2016](https://github.com/carlomartinucci/ignite-2016-7)  
//     Secondo Ignite@Uqido. Fino a quanto riesci a contare con le dita di una mano?

// * [Ignite@Uqido, 20 luglio 2016](https://github.com/carlomartinucci/ignite-2016-7-costi)  
//     Ignite@Uqido della Costi. 8+1 cose sul web marketing che ho imparato dal mio matrimonio

// * [Tic tac toe](https://github.com/carlomartinucci/tic-tac-toe)  
//     Tris. Il mio primo esperimento con React

// * [Spiegami - Referendum](https://github.com/carlomartinucci/spiegami-referendum)  
//     Spiegami il Referendum. La prima implementazione di Spiegami, con React e MaterialUI.

// * [Gratta e perdi - reboot](https://github.com/carlomartinucci/gratta-react-redux)  
//     Perché i gratta e vinci sono sempre una tassa statale sulla stupidità, anche se lo fai con React e Redux.

// * [Text2Points](https://github.com/carlomartinucci/text2points)  
//     Prendi un testo e convertilo in una manciata di punti. React + localStorage + service-worker, una volta caricato funziona anche offline

// * [Ignite@Uqido, 28 maggio 2017](https://github.com/carlomartinucci/ignite20170528/)  
//     internet di babele. vanilla js organizzato in stile mvc


// Altre idee
// ----------

// * WhatGuess  
//     Un giochino

// * AdCapSim  
//     Un simulatore per Adventure Capitalist

// * TutorAttivi  
//     Si possono usare i dati della [polizia di stato](http://www.poliziadistato.it/articolo/view/175/)

// * TrovaMesse  
//     Geolocalizzazione e altro
//   `
  // $("#content").html(marked(fakemd));
});
