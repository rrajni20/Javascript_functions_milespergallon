var wrapperEle = document.body.querySelector(".wrapper");
var resultsEle = document.body.querySelector(".results");
var results1Ele = document.body.querySelector(".results1");
var results2Ele = document.body.querySelector(".results2");
var results3Ele = document.body.querySelector(".results3");
var ClickEle = document.body.querySelector(".Click");

function rewriteFunction() {
  var numberofMiles = Number(
    prompt("Enter the number of miles per year you drive?")
  );
  var gasolineCost = Number(
    prompt("What is the cost of a gallon of gasoline in your area?")
  );
  writerFunction(numberofMiles, gasolineCost, 12, resultsEle);
  writerFunction(numberofMiles, gasolineCost, 17, results1Ele);
  writerFunction(numberofMiles, gasolineCost, 26, results2Ele);
  writerFunction(numberofMiles, gasolineCost, 29, results3Ele);
}

function writerFunction(numberofMiles, gasolineCost, mpgrating, resultsEle) {
  var results1 = (numberofMiles / mpgrating * gasolineCost);
  resultsEle.innerHTML =
    "To drive a car with an MPG rating of " +
    mpgrating +
    " for " +
    numberofMiles +
    " miles at " +
    gasolineCost +
    " per gallon would cost " + results1;
  
  
}

rewriteFunction();

ClickEle.addEventListener("click", function(){
                           rewriteFunction();
                           })