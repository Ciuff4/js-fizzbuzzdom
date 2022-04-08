/*
1. Scrivi un programma che stampi in console i numeri da 1 a 100.
2. Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
3. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
4. Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
5. Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

const containerJs= document.querySelector(".container")
const buttonEl= document.querySelector(".button")

const max=100


for(let i=1; i<max; i++){
    const buttonEl= document.createElement("div");
    buttonEl.className="button";
    buttonEl.append(i);
    containerJs.append(buttonEl)

    if((i% 3===0) && (i%5===0 )){
        buttonEl.classList.add("frizzbuzz")
        buttonEl.innerHTML="FrizzBuzz"
        console.log("frizzbuzz");

    }else if(i % 5===0){
        buttonEl.classList.add("buzz")
        buttonEl.innerHTML="Buzz"
        console.log("buzz");

    }else if(i % 3===0){
        buttonEl.classList.add("frizz")
        buttonEl.innerHTML="Frizz"
        console.log("frizz");
    }else{
        console.log(i)
    }
}