// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
Here is the HTML formatting for our mission target div.
     <script>
        const div = document.getElementById("myFetch")
        div.innerHTML =
        <ol>
            <li>Name: ${myFetch.temp}</li>
            <li>Diameter: ${myFetch.diameter}</li>
            <li>Star:  ${myFetch.star}</li>
            <li>Distance from Earth ${myFetch.distanceFromEarth}</li>
            <li>Number of Moons: ${myFetch.numberOfMoons}</li>
                     </ol>
                     <img src="">
        </script>
                <h2>"Mission Destination"</h2>
                <div id = "myFetch"></div>
   


function validateInput() {
    <script>
    window.addEventListener("load", function() {
       let form = document.querySelector("form");
       form.addEventListener("submit", function(event) {
          let pilotName = document.querySelector("input[name=pilot name]");
          let copilotName = document.querySelector("input[name=copilot name]");
          let fuelLevel = document.querySelector("input[name=fuel level]");
          let cargoMass = document.querySelector("input[name=cargo mass]");
          if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value = "" || cargoMass.value = "") {
             alert("Empty");
          if (isNaN(fuelLevel.value)|| isNan(cargoMass.value)); 
             alert("Not a number.");
          if (fuelLevel.value === number || cargoMass.value === number);
              alert("is a number.");
            event.preventDefault();
          }
       });
    });
 </script>
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilot = document.getElementById("pilotName")
    let copilot = document.getElementById("copilotName")
    let fuelLevel = document.getElementById("fuelLevel")
    let cargoMass = document.getElementById("cargoMass")
    
    <form action="" method="POST">
    <div id = "list"> <ul>
    <li><label>Pilot Name <input type="text" name="pilot name"></label></li>
    <li><label>Co-pilot Name <input type="text" name="copilot name"></label></li>
    <li><label>Fuel Level <input type="number" name="fuel level"/></label></li>
    <li><label>Cargo Mass <input type="number" name="cargo mass"/></label></li></ul>
    <button>Submit</button></div>

    
 </form>
 
}

async function myFetch() {
   
   window.addEventListener("load", function() {
   let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {}

    console.log(response);    
   }
});
    

    return planetsReturned;
}

function pickPlanet(planets) {
    let planets = myFetch(Math.random())
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
