console.log('Oefeningen basis JS');

console.log('*** Oefening 1 ***');
/***
 Gegeven twee getallen. Bereken het percentage van het eerste getal ten opzichte van het tweede getal. Rond af naar het dichtste gehele getal. Schrijf hieronder een functie percentage die dit berekent. Gebruik de klassieke function-notatie.
 ***/






console.log(percentage(2, 4)); //verwacht resultaat 50
console.log(percentage(5, 8)); //verwacht resultaat 63  
console.log(percentage(0, 3)); //verwacht resultaat 0
console.log(percentage(5, 0)); //verwacht resultaat Infinity


console.log('*** Oefening 2 ***');
/*** 
Een functie krijgt twee strings als argument. De functie geeft de langste van de twee strings terug. Schrijf een functie langsteWoord die dit doet. Gebruik de vette pijl functienotatie.
***/




console.log(langsteWoord('appel', 'peer')); //verwacht resultaat appel
console.log(langsteWoord('kat', 'peer')); //verwacht resultaat peer




console.log('*** Oefening 3 ***');
/*** 
Maak een constante huidigJaar en ken er de waarde van dit jaar aan toe. Gebruik je const of let?
***/




/***
Schrijf een functie in gewone functienotatie die een geboortejaar als argument neemt en de huidige leeftijd teruggeeft. Test telkens je functie met verschillende geboortejaren. Gebruik hiervoor console.log(). 
***/





/*** 
 Deze leeftijd is natuurlijk alleen maar correct als je al verjaard bent dit jaar. Schrijf een nieuwe functie met een extra boolean argument alVerjaard dat aangeeft of je al verjaard bent dit jaar. Gebruik eerst een gewone if-else structuur.
 ***/




console.log(leeftijd(1990, true));
console.log(leeftijd(1990, false));
console.log(leeftijd(2000, true));



/*** 
 Herschrijf deze functie nu door gebruik te maken van de ternaire operator (de ? operator, zie cursussite). Hiermee kan de functie een stuk korter genoteerd worden.
 ***/







/*** 
 Vanaf 1 januari is bovenstaande code niet meer correct en moet je aan de variabele huidigJaar een nieuwe waarde toekennen. Dat kan niet de bedoeling zijn. Schrijf een nieuwe functie die enkel nog het geboortejaar en de boolean alVerjaard als argumenten neemt en de leeftijd berekent. De functie moet zelf het huidig jaar bepalen. Ga op zoek naar de mogelijkheden van het Date object in JavaScript.
***/





/***
Herschrijf deze functie in vette pijl notatie.
***/






console.log('*** Oefening 4 ***');
/***
Schrijf een functie die de kwadraten van de getallen van 1 tot 20 berekent. De functie schrijft in de console telkens op een nieuwe lijn een zin met het getal en zijn kwadraat: "Het kwadraat van 1 is 1".
"Het kwadraat van 2 is 4" enz. Gebruik hiervoor een for-lus. Werk ook met backticks (`...`) en de ${} notatie.
***/






/***
Doe hetzelfde als oefening met een while lus.
***/



