// Creazione dell'elemento footer
var footer = document.createElement('footer');
footer.className = 'pieDiPagina';

// Creazione del div per i diritti
var divDiritti = document.createElement('div');
divDiritti.className = 'diritti';

// Creazione del paragrafo per i diritti
var pDiritti = document.createElement('p');
pDiritti.id = 'diritti';
pDiritti.innerHTML = 'Via Cavour, 1 - 76017 San Ferdinando di Puglia (BT) <br>' +
                     'Telefono: 0883 112233 (sede centrale) 0883 445566 (sede Liceo) <br>' +
                     'Mail: lopezvincenzo8@gmail.com - PEC: vlopez@studenti.apuliadigitalmaker.it <br>' +
                     'Codice fiscale: 00112233445 <br>' +
                     '© 2024 Vincenzo Lopez';

// Aggiunta del paragrafo al div e del div al footer
divDiritti.appendChild(pDiritti);
footer.appendChild(divDiritti);

// Aggiunta del footer al body del documento
document.body.appendChild(footer);
