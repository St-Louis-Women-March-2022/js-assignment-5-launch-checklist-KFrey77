// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//Here is the HTML formatting for our mission target div.
    
        //const div = document.getElementById("myFetch")
        //div.innerHTML =
      //   <ol>
      //       <li>Name: ${myFetch.temp}</li>
      //       <li>Diameter: ${myFetch.diameter}</li>
      //       <li>Star:  ${myFetch.star}</li>
      //       <li>Distance from Earth ${myFetch.distanceFromEarth}</li>
      //       <li>Number of Moons: ${myFetch.numberOfMoons}</li>
      //                </ol>
      //                <img src="">
        
              
   }


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
   
   // let pilot = document.getElementById("pilotName")
   // let copilot = document.getElementById("copilotName")
   // let fuelLevel = document.getElementById("fuelLevel")
   // let cargoMass = document.getElementById("cargoMass")

    
    if (validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
      window.alert("Empty");
    } else if (isNaN(fuelLevel.value)|| isNan(cargoMass.value)) {
      window.alert("Not a number.")
   } else   {
      window.alert("is a number.");
   }
 
}

async function myFetch() {
   
   let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();

      console.log(response);    
    }
);   

    return planetsReturned;
}

function pickPlanet(planets) {
    let planets = myFetch(Math.random())
    return planets
    
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
