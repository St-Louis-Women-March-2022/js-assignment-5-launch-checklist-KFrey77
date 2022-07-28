//const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
// let pilot = []
// let copilot = []
// let fuelLevels = []
// let cargoMass = []




window.addEventListener("load", function() {
   

   let listedPlanets = [];
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
       console.log(selectedPlanet);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    //    name = []
    //    diameter = []
    //    star = []
    //    distance = []
    //    moons = []
    //    image = []
    // return result
    
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   let list = document.getElementById("faultyItems")     
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     event.preventDefault();
   //   event.stopPropagation();

     let pilotStatus = document.getElementById("pilotStatus");
     let copilotStatus = document.getElementById("copilotStatus");
     

       let pilot = document.getElementById("pilotName").value;
       let copilot = document.getElementById("copilotName").value;
       let fuelLevels = Number(document.getElementById("fuelLevel").value);
       let cargoLevel = Number(document.getElementById("cargoMass").value);
      //  console.log(fuelLevels);
      //  console.log(cargoLevel);
       console.log(pilot);
   //    document.getElementById("launchStatus").innerHTML= `
    
       pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch.`
       copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch.`
    
   // if (fuelLevel.value > 10000 && cargoMass.value < 200)   {
   //     launchStatus.innerHTML= 'Shuttle is ready for launch.'
   //     cargoStatus.innerHTML= 'Cargo mass low enough for launch.'
   //     faultyItems.style.visibility= 'visible'
   //  } else if (fuelLevel.value < 10000 && cargoMass.value > 200)
   //     launchStatus.innerHTML= 'Shuttle is not ready for launch.'
   //     faultyItems.style.visibility= 'visible' `

  formSubmission(document, list, pilot, copilot, fuelLevels, cargoLevel);
  //  validateInput();
       
   });
   
});

