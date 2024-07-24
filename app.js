const pi = 3.14159;
const radius = 5;
const minSpacePerPlant = 0.8;
const growthRate = 2;

const area = pi * radius * radius;
const maxPlants = area / minSpacePerPlant;

const predictGrowth = (initialPlantCount, weeks) =>{
    let plants = initialPlantCount;
    for (let t = 0; t < weeks; t++) {
        plants *= growthRate;
    }
    console.log(`There will be ${plants} after ${weeks}. Plants should be:`);
    if(plants > 0.8 * maxPlants){
        console.log("Pruned");
    }
    else if(plants >= 0.5 * maxPlants){
        console.log("Monitored");
    }
    else{
       console.log("Planted");
    }
    return plants;
}

predictGrowth(20, 1);
predictGrowth(20, 2);
predictGrowth(20, 3);

// -------------------Part 2-------------------

let neededSpace = predictGrowth(100, 10);
let newRadius = Math.sqrt(neededSpace/pi);
console.log(object);