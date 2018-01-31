var a=10, b= "3c" ;
var wynik= a+b;
//alert(wynik);
//alert(a+b);
console.log("tekst");
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(a + b)); //string

console.trace();

var _zmienna1 = 10;
//var 3liczba = 10; //błędna nazwa zmiennej
var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa)); //number

//int integer liczba całkowita (c++)
//float zmiennoprzecinkowa np. 3.5 (c++)


//bool

var prawda = true;
var falsz = false;
console.log(typeof(prawda)); //boolean


//string

var tekst = "Janusz";
console.log(typeof(tekst));//string


//undefined

var imie;
console.log(imie); //undefined
console.log(typeof(imie)); //undefined
imie = "Sandra";
console.log(imie);
console.log(typeof(imie)); //string


//object

var tablica = ["Janusz", "Anna", "Krystyna"];
console.log(tablica);
console.log(typeof(tablica)); //object





//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$




//var liczba = prompt("Podaj liczbe");
/*var liczba1 = prompt("Podaj pierwszą liczbe", "np.3.4");
var liczba2 = prompt("Podaj drugą liczbe", "np.3.4");
var suma = prompt(liczba1+liczba2);
//liczba1 = parseInt(liczba1);
                     //paraseInt liczby całkowite
//liczba2 = parseInt(liczba2);
liczba1 = parseInt(liczba1);
liczba2 = parseInt(liczba2);
console.log(typeof(liczba1));
console.log(typeof(liczba2));
document.write(suma);
console.log(typeof(suma));
*/

/*ZAD.1


mama,tata oraz dziecko podają swój wiek z klawiatury
Na ekranie wyświetl w formacie :


mama : ..lat
tata : ..lat
dziecko : ..lat
średni wiek ;*/



//Odp
/*
var wiekMama = prompt("Podaj wiek Mamy");
var wiekTata = prompt("Podaj wiek Taty");
var wiekDziecko = prompt("Podaj wiek Dziecka");

wiekMama = parseInt(wiekMama);
wiekTata = parseInt(wiekTata);
wiekDziecko = parseInt(wiekDziecko);

var wiekSredni = (wiekMama + wiekTata + wiekDziecko)/3 ;
wiekSredni = wiekSredni.toFixed(2) //2 miejsca po przecinku

document.write("Mama: " + wiekMama + " lat");
document.write("<br>Tata: " + wiekTata + " lat");
document.write("<br>Dziecko: " + wiekDziecko + " lat");
document.write("<br>Średni wiek:" + wiekSredni);
*/
// %%% parseint całkowite parsefloat z przecinkiem




