let temperatureInput = document.querySelector("#temp-input").value;

document.querySelector("#convert-temp").disabled = true;  //button is disabled by default

function myCelsius (fahrenheit) {  //convert fahrenheit to celsius

  let tempInput = fahrenheit;
  let myTemp = (5/9) * (fahrenheit - 32);
  const PRECISION = 1;

  function roundMe (value, precision) {  //round the input to one digit
    let multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
  }

  myTemp = roundMe(myTemp, PRECISION);

  document.querySelector("#converted-temperature").innerHTML = "<p>" + tempInput + " degrees Fahrenheit is " + myTemp + " degrees Celsius.</p>";

  myTemp = null;  //set myTemp to null so it doesn't retain the previous value

  return;

}

function myFahrenheit (celsius) {  //convert celsius to fahrenheit

  let tempInput = celsius;
  let myTemp = (9/5) * celsius + 32;
  const PRECISION = 1;

  function roundMe (value, precision) {  //round the input to one digit
    let multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
  }

  myTemp = roundMe(myTemp, PRECISION);

  document.querySelector("#converted-temperature").innerHTML = "<p>" + tempInput + " degrees Celsius is " + myTemp + " degrees Fahrenheit.</p>";

  myTemp = null;  //set myTemp to null so it doesn't retain the previous value

  return;
  
}

//disable the "Convert" button until the input field contains a number; any number is acceptable
function disableConvertButton () {

  let checkForNumber = document.querySelector("#temp-input").value;

  if (document.querySelector("#temp-input").value.length === "") {
      document.querySelector("#convert-temp").disabled = true;
  } else if (isNaN(checkForNumber)) { 
      document.querySelector("#convert-temp").disabled = true;
      document.querySelector("#temp-input").value = "";
      alert("Please enter a number. Letters and other characters are not allowed.");
  } else {
      document.querySelector("#convert-temp").disabled = false;
  }

  return;

}

//event listeners
document.querySelector("#temp-input").addEventListener("keyup", function() {
  temperatureInput = parseFloat(document.querySelector("#temp-input").value);
  disableConvertButton();
}, false);
document.querySelector("#convert-temp").addEventListener("click", function () {  //submit both input temperature and unit selection and convert the temperature
  if (document.querySelector("#celsius").checked == true) {
    myFahrenheit(temperatureInput);
    document.querySelector("#temp-input").value = "";
    document.querySelector("#convert-temp").disabled = true;
  } else {
    myCelsius(temperatureInput);
    document.querySelector("#temp-input").value = "";
    document.querySelector("#convert-temp").disabled = true;
  }
}, false);
document.querySelector("#reset-button").addEventListener("click", function() {  //when the button is clicked, clear all
  document.querySelector("#temp-input").value = "";
  document.querySelector("#converted-temperature").innerHTML = "";
  document.querySelector("#celsius").checked = true;
  document.querySelector("#convert-temp").disabled = true;
}, false);
