// Write your helper functions here!
// require('isomorphic-fetch');

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
    let number = Number(testInput); 

      if (testInput === "") {
         return "Empty";
       } else if (isNaN(number)) {
         return "Not a number."
        }else if (isNaN(number) === false){
        return "Is a number.";
        }
     
   };
  
  
 

function formSubmission(document, list, pilot, copilot, fuelLevels, cargoLevel) {
   
  
   
  // pilot = document.getElementById("pilotName")
  //  copilot = document.getElementById("copilotName")
  //  fuelLevels = document.getElementById("fuelLevel")
  //  cargoLevel = document.getElementById("cargoMass")
   
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  //  console.log("fuelLevel:" + fuelLevel);
  //  console.log("cargoMass:" + cargoMass);
  // console.log(cargoStatus)
  pilot = document.querySelector("input[name=pilotName]").value;
  copilot = document.querySelector("input[name=copilotName]").value;
  fuelLevels = document.querySelector("input[name=fuelLevel]").value;
  cargoLevel = document.querySelector("input[name=cargoMass]").value;
    // console.log(fuelLevels)
    // console.log(cargoLevel)
    if (validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevels) === "Empty" || validateInput(cargoLevel) === "Empty") {
      window.alert("Empty");
    } else if (validateInput(pilot) === "Is a number." || validateInput(copilot) === "Is a number." || validateInput(fuelLevels) === "Not a number." || validateInput(cargoLevel) === "Not a number.") {
      window.alert("Enter valid information for each field.");
    } else if (fuelLevels >= 10000 && cargoLevel <= 200)   {
        launchStatus.innerHTML= 'Shuttle is ready for launch.'
        fuelStatus.innerHTML= 'Fuel level high enough for launch.'
        cargoStatus.innerHTML= 'Cargo mass low enough for launch.'
        launchStatus.style.color = 'green'
        list.style.visibility = 'visible'
        // console.log("a")
    } else if (fuelLevels <= 10000 && cargoLevel >= 200) {
        launchStatus.innerHTML= 'Shuttle is not ready for launch.'
        cargoStatus.innerHTML= 'Cargo mass too high for launch.'
        fuelStatus.innerHTML= 'Fuel level too low for launch.'
        launchStatus.style.color = 'red'
        list.style.visibility = 'visible'
        // console.log("b")
   } else if (fuelLevels <= 10000 && cargoLevel <= 200) {
          launchStatus.innerHTML= 'Shuttle is not ready for launch.'
          cargoStatus.innerHTML= 'Cargo mass low enough for launch.'
          fuelStatus.innerHTML= 'Fuel level too low for launch.'
          launchStatus.style.color = 'red'
          list.style.visibility = 'visible'
          // console.log("c")
   } else if (fuelLevels >= 10000 && cargoLevel >= 200) {
            launchStatus.innerHTML= 'Shuttle is not ready for launch.'
            cargoStatus.innerHTML= 'Cargo mass too high for launch.'
            fuelStatus.innerHTML= 'Fuel level high enough for launch.'
            launchStatus.style.color = 'red'
            list.style.visibility = 'visible'
            // console.log("d")
        // faultyItems.style.visibility= 'visible' }

        // document.getElementById("formSubmit");
    
      }
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
