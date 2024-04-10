// Creazione dell'elemento header e assegnazione della classe 'testata'
var header = document.createElement('header');
header.className = 'testata';

// Creazione del div 'ministero' e aggiunta del contenuto
var ministero = document.createElement('div');
ministero.id = 'ministero';
ministero.innerHTML = '<p>Ministero dell\'Istruzione e del Merito</p>';
header.appendChild(ministero);

// Creazione del div 'testata'
var testata = document.createElement('div');
testata.id = 'testata';

var link = document.createElement('a');
link.href = 'ScuolaPrivata.html';
link.target = '_self';

var logo = document.createElement('img');
logo.id = 'logo';
logo.src = 'Multimedia/Immagini/logo.ico';
logo.alt = 'Istituto Agrario Privato Cocci Nella';
logo.border = '0';
link.appendChild(logo);

var nomeScuola = document.createElement('div');
nomeScuola.id = 'nomeScuola';

var istituto = document.createElement('span');
istituto.textContent = 'Istituto Agrario Privato';
nomeScuola.appendChild(istituto);

var nome = document.createElement('span');
nome.innerHTML = '<strong>Cocci Nella</strong>';
nomeScuola.appendChild(nome);

var localita = document.createElement('span');
localita.textContent = 'San Ferdinando di Puglia';
nomeScuola.appendChild(localita);

testata.appendChild(link);
testata.appendChild(nomeScuola);
header.appendChild(testata);

// Creazione del div 'menu'
var menu = document.createElement('div');
menu.className = 'menu';

var nav = document.createElement('nav');
nav.setAttribute('data-spy', 'affix');
nav.setAttribute('data-offset-top', '100');
nav.id = 'menu';

var home = document.createElement('a');
home.href = 'ScuolaPrivata.html';
home.id = 'home';
home.textContent = 'Home';
nav.appendChild(home);

var menu1 = document.createElement('a');
menu1.href = 'PaginaStoria.html';
menu1.id = 'menu1';
menu1.textContent = 'Scuola';
nav.appendChild(menu1);

var menu2 = document.createElement('a');
menu2.href = 'PaginaCorsi.html';
menu2.id = 'menu2';
menu2.textContent = 'Corsi';
nav.appendChild(menu2);

var menu3 = document.createElement('a');
menu3.href = 'PaginaForm.html';
menu3.id = 'menu3';
menu3.textContent = 'Contatti';
nav.appendChild(menu3);

menu.appendChild(nav);
header.appendChild(menu);

// Aggiunta elemento header al body del documento
document.body.appendChild(header);