

//Creates a random number to start the score
var randomScore = Math.floor((Math.random() * 20) + 15);

//CREATES A RANDOM NUMBER TO Match
var randomNumber = Math.floor((Math.random() * 100) + 19);
//creates an array for the crystal numbers
var crystalNumbers =[];
var lost= 0;
var wins= 0;
//Shows info on the screen
$("#numero").append(randomNumber);
$("#total").append(randomScore);
$("#wins").append(wins);
$("#loses").append(lost);


    
//CREATES A RANDOM NUMBER FOR EACH CRYSTAL

for (let x = 0; x < 4; x++) {
    
   crystalNumbers[x] = Math.floor((Math.random()*12)+1);

}

$("#one").attr('data-value', crystalNumbers[0]);
$("#two").attr('data-value', crystalNumbers[1]);
$("#three").attr('data-value', crystalNumbers[2]);
$("#four").attr('data-value', crystalNumbers[3]);


//clicking crystals

//first
$("#one").on("click", function(){
    //updates the score
    randomScore= randomScore+crystalNumbers[0];
    //shows it on the screen
    $("#total").text(randomScore)
    
});
//second
$("#two").on("click", function(){
    randomScore= randomScore+crystalNumbers[1];
    $("#total").text(randomScore)
    
});
//third
$("#three").on("click", function(){
    //updates the score
    randomScore= randomScore+crystalNumbers[2];
    //shows it on the screen
    $("#total").text(randomScore)
    
    });
    //fourth
    $("#four").on("click", function(){
        randomScore= randomScore+crystalNumbers[3];
        $("#total").text(randomScore)
        
    });

//reset function
function reset(){

    randomScore = Math.floor((Math.random() * 20) + 15);
    randomNumber = Math.floor((Math.random() * 100) + 19);
    //updates score board!
       $("#numero").text(randomNumber)
       $("#total").text(randomScore)

    for (let x = 0; x < 4; x++) {
        crystalNumbers[x] = Math.floor((Math.random()*12)+1);
     
     }


     $("#one").attr('data-value', crystalNumbers[0]);
     $("#two").attr('data-value', crystalNumbers[1]);
     $("#three").attr('data-value', crystalNumbers[2]);
     $("#four").attr('data-value', crystalNumbers[3]);
     


}
//winning function
    function won(){
    
        alert("you've won!")
        wins ++;
        $("#wins").text(wins)
        reset();
        
    }
    //losing function
    function loser(){

        alert("you lose!")
        lost ++;
        $("#loses").text(lost)
        reset();
       
    }


    if (randomNumber === randomScore){
        won();

    }
   


    if (randomScore>randomNumber){

        loser();
    }

 

