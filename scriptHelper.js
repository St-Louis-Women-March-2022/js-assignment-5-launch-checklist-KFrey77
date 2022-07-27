// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//Here is the HTML formatting for our mission target div.
document.getElementById("missionTarget").innerHTML = 
       ` <h2>Mission Destination</h2><ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star:  ${star}</li>
      <li>Distance from Earth ${distance}</li>
      <li>Number of Moons: ${moons}</li>
   </ol><img src="${imageUrl}"></img>  `          
   };


function validateInput(testInput) {
   
      if (testInput === "") {
         return "Empty";
       } else if (isNaN(testInput)) {
         return "Not a number."
        } else {
         return "Is a number." 
   };
   
    
};
 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   
   // pilot = document.getElementById("pilotName")
   // copilot = document.getElementById("copilotName")
   // fuelLevel = document.getElementById("fuelLevel")
   // cargoMass = document.getElementById("cargoMass")
   
   let pilotStatus = document.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")
   console.log("fuelLevel:" + fuelLevel)
   console.log("cargoMass:" + cargoMass)


    if (validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
      window.alert("Empty");
    } else if (validateInput(pilot) === "Is a number." || validateInput(copilot) === "Is a number." || validateInput(fuelLevel) === "Not a number." || validateInput(cargoMass) === "Not a number.") {
      window.alert("Enter valid information for each field.")
    }
        
    launchStatus.innerHTML= `
    <div>
    <ol>
    `
        pilotStatus.innerHTML= `Pilot ${pilot.value} is ready for launch.`
        copilotStatus.innterHTML= `Co-pilot ${copilot.value} is ready for launch.`
     
    if (fuelLevel.value > 10000 && cargoMass.value < 200)   {
        launchStatus.innerHTML= 'Shuttle is ready for launch.'
        cargoStatus.innerHTML= 'Cargo mass low enough for launch.'
        faultyItems.style.visibility= 'visible'
     } else if (fuelLevel.value < 10000 && cargoMass.value > 200)
        launchStatus.innerHTML= 'Shuttle is not ready for launch.'
        faultyItems.style.visibility= 'visible'
  `</ol>
   </div>`
    }

async function myFetch() {
   
   let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();

      //console.log(response);    
    }
);   

    return planetsReturned;
}

function pickPlanet(planets) {
   
   planets = planets[(Math.floor(Math.random()*planets.length))];
    return planets
    
}

// let list = ("https://handlers.education.launchcode.org/static/planets.json")
// for (i=0; i < 6; i++){
//    console.log(pickPlanet(list));
//}
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
