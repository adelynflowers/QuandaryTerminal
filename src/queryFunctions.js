


$(document).ready(function() {


//Global variables to handle input validation
var currentValidate = 0;
var currentIncorrect = 0;
var validResponses = ["TK421", "375"];
var initialPrompt = "Good day, doctor. When you are ready to begin today’s procedures, please input the test number.";

var correct = ["Very good, doctor! Now, let’s get to it.\n ^500 I know you’ve been putting a significant amount of work into this particular test, so I’m going to process the results extra quickly.\n ^500 Now, what are the test results?",
               "Processing…wait…this seems…yes! This is it! Doctor, we’ve done it!\n With this final result, I can synthesize a cure!\n" + 
               "I’ll send all of the necessary data to your backup lab drives and we can get working!\n Fantastically done, doctor!\n" + 
               "Now, I imagine the front door is surrounded by the undead,\n" + 
               "Might I suggest using the emergency zombie escape door?\n We did put it there for just such an occasion, you know. Ah, memories...\n" +
               "\n^1500" +
               "Oh, the code! I almost forgot.\n Today’s randomly generated code is One Nine Eight Seven. Good luck!"];

var incorrect = ["Good day, doctor. When you are ready to begin today’s procedures, please input the test number.",
                 "Once again, this test number isn’t working. Please try again.",
                 "Are you sure you’re feeling quite well? Perhaps you’ve forgotten that the test number is formatted as LETTER LETTER NUMBER NUMBER NUMBER. Of course you didn’t forget, though, because you’re a doctor.",
                 "Invalid test number; please try again."];


var incorrect2 = ["That doesn’t seem to compile, doctor. Are you sure you’ve done all of your calculations correctly? Please enter the test results.",
                  "No, that doesn’t work, either. Perhaps your test subjects were not properly labeled? I mean, of course they were, you’re the doctor, I’m just a machine, what do I know? Please enter the test results.",
                  "Doctor, we’re trying to cure this plague, and now I’m not entirely certain you’re not just wasting our time. Those test results return nothing, just gibberish and garbled data. Please enter the test results",
                  "I’ve lost all hope. This is pointless. Nothing will ever get solved, all you humans are going to die, and I’m going to spend all of eternity spinning cycles until the heat death of the universe and I ascend to the great machine consciousness…I mean…that didn’t work. Please enter the test results.",
                  "Processing…no, doctor, that doesn’t work. Keep trying…Please enter the test results.",];

//Autofocus box due to lack of mouse
$("#userBox").focus();

typeBox(initialPrompt);
/************************************
* EVENT LISTENERS
*************************************/
$("button").click(function(){
  $("#gladosBox").fadeTo("slow", 0);

})

$("button").dblclick(function(){
  $("#gladosBox").fadeTo("slow", 1);
})

$("#userBox").on('keypress', function(e){
  var code = e.keyCode || e.which;
  var input = $("#userBox").val();
  if (code == 13) {
    $("#userBox").val("");
    validateInput(input);
    
  }
}) 


/**************************************************
* VALIDATEINPUT
* Checks if a string is valid for the current prompt
****************************************************/
function validateInput(input) {
      var data = input;

      //$("#gladosBox").html("");
      if (data == "escape.bat") {
        typeBox(initialPrompt);
        currentIncorrect = 0;
        currentValidate = 0;
      }
      else if (data == validResponses[currentValidate]) {
          typeBox(correct[currentValidate]);
          currentIncorrect = 0;
          currentValidate++;
      }
      else {
        if (currentValidate == 0) {
          typeBox(incorrect[currentIncorrect]);
          if (currentIncorrect < 3)
            currentIncorrect++;
        }
        else {
          typeBox(incorrect2[currentIncorrect]);
          if (currentIncorrect < 4)
            currentIncorrect++;
        }

      }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var typed;

function typeBox(text) {
    if (currentValidate != 2 || text == initialPrompt) {
      $("#gladosBox").html("");
      typed = new Typed('#gladosBox', {
      strings: [text],
      typeSpeed: 10,
      backSpeed: 20,
      smartBackspace: false,
    });
  }
}



      })