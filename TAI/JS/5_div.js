//document.getElementById('blok1').innerHTML = 'Janusz'

var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');


b1.innerHTML = 'Janusz';
b2.innerHTML = 'Januszewski';

var imie = prompt('Podaj imie');
b3.innerHTML = imie;

b4.textContent = 'Janusik';

//różnica pomiędzy innethtml a textContent

inner.innerHTML = '<h1>inner</h1>';
content.textContent = '<h1>content</h1>';

/*
zad.1 uzytkownik podaje z klawy dwie wartości : Dł.podstawy i wys trójkąta.
Wyświetl wynik w divie w formacie : "Pole trójkąta wynosi: ....cm2";
wynik ma być w kolorze białym na tle czarnym
Ogranicz blok wyświetlający do szerokości 200 px
zaokrąglij wynik do 2 miejsc po ,
W arkuszu stylów ustaw wyrównanie tekstu do środka
*/

var wynik = document.getElementById('wynik');
var podstawa = prompt('Podaj długość podstawy:');
var wysokosc = prompt('Podaj wysokość trójkąta:');
var oblicz = 0.5 * podstawa * wysokosc;
oblicz = oblicz.toFixed(2);
wynik.innerHTML = 'Pole trójkąta wynosi: ' + oblicz +'cm<sup>2';





