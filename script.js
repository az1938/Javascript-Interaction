var heading;
var executeButton;
var outputParagraph;
var inputElement;
var desserts = [", here is your apple pie!", ", almond malai kulfi seems suitable for you~", ", it's a sunny day! I recommend you to try our lemon tart.", ", you should try pistachio phirni!", ", here is some fudgy chewy brownies for you~", ", you should try our low fat tiramisu!", ", this coconut kheer is for you!", ", do you want to try our chocolate coffee truffle?", ", it's cold outside, try this hot cointreau souffle to warm your body a little bit~", ", I recommend you my favorite one, eggless chocolate mousse!"];



document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");
  executeButton.addEventListener("click", function(){
    generateDessert();
  });

});



function generateDessert(){

  var currentInputText = inputElement.value;
  var randomDessertIndex = Math.floor(Math.random()*desserts.length);
  outputParagraph.innerText = "Hi " + currentInputText + desserts[randomDessertIndex];
  restyleOutput();

}



function restyleOutput() {

  var randomRed = Math.random() * 220;
  var randomGreen = Math.random() * 220;
  var randomBlue = Math.random() * 220;
  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  outputParagraph.style.color = outputColorString;

}
