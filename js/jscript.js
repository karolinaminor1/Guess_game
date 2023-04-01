  
var random= Math.round((Math.random()*50));
   

function funkcja1(){

let text;

let numer= Number(document.getElementById("liczba").value);
if( !numer || numer>50 || numer<0 ){
alert("Wprowadz liczbę z zakresu od 0 do 50!");
return;
}

if(document.getElementById("proby").value==0){
document.getElementById("tekst").innerHTML="Koniec gry";
document.getElementById("proby").value=10;
return;
}

else{


if(numer<random){
document.getElementById("tekst").innerHTML="Za mało";
document.getElementById("proby").value=( document.getElementById("proby").value )-1;
return;
}

if(numer>random){
document.getElementById("tekst").innerHTML="Za dużo";
document.getElementById("proby").value=( document.getElementById("proby").value )-1;
return;
}

if(numer==random){
alert("Gratulacje!");
document.getElementById("tekst").innerHTML="Wygrałeś!";
document.getElementById("proby").value=10;
return;
}

}
}

    



   

function funkcja2(){

        document.getElementById("tekst").innerHTML=random;
        document.getElementById("proby").value=10;

}

    


    
        $( ".button" ).mouseover(function() {
            $( this ).animate({
                width: "+=5",
                height: "+=5"
            }, 200);
        });

         $( ".button" ).mouseout(function() {
                $( this ).animate({
                    width: "-=5",
                    height: "-=5"
                }, 200);
         });

   