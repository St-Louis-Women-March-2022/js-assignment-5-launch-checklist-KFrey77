//const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
let pilot = []
let copilot = []
let fuelLevels = []
let cargoMass = []




window.addEventListener("load", function() {
   

   let listedPlanets = [];
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       pickPlanet(listedPlanets);
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
       name = []
       diameter = []
       star = []
       distance = []
       moons = []
       imgUrl = []
    return result
    
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
        
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     event.preventDefault();
       pilot = document.getElementById("pilotName").value;
       copilot = document.getElementById("copilotName").value;
       fuelLevels = document.getElementById("fuelLevel").value;
       cargoMass = document.getElementById("cargoMass").value;
       formSubmission(document, pilot, copilot, fuelLevels, cargoMass)
       
       
   });

});

