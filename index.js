
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result");

function lengthConvert(){
    let num = document.getElementById("input").value;
    document.getElementById("value-entered").textContent = num;
    let resultFeet = num * 3.28                 // meters to feet
    let resultMeters = num / 3.28               //feet to meters
lengthResult.textContent = num+" meters = "+resultFeet.toFixed(3)+" feet | "+num+" feet = "+resultMeters.toFixed(3)+" meters"

}
function volumeConvert(){
    let num = document.getElementById("input").value;
    document.getElementById("value-entered").textContent = num;
    let resultGallon = num * 0.264172                  // liters to gallons
    let resultliters = num / 0.264172                //gallons to liters
volumeResult.textContent = num+" liters = "+resultGallon.toFixed(3)+" gallons | "+num+" gallons = "+resultliters.toFixed(3)+" liters"

}
function massConvert(){
    let num = document.getElementById("input").value;
    document.getElementById("value-entered").textContent = num;
    let resultPounds = num * 2.2                 // kilos to pounds
    let resultKilos = num / 2.2               //pounds to kilos
massResult.textContent = num+" kilos = "+resultPounds.toFixed(3)+" pounds | "+num+" pounds = "+resultKilos.toFixed(3)+" kilos"

}

function allFunctions(){
    let numInput  = document.getElementById("input").value;
    console.log(numInput);
    lengthConvert()
    volumeConvert()
    massConvert() 
}