const pi = 3.14159;
const initialPlantCount = 20;
const radius = 5;
const minSpacePerPlant = 0.8;
const growthRate = 2;

const area = pi * radius * radius;
const maxPlants = area / minSpacePerPlant;

const predictGrowth = (weeks) =>{
    let plants = initialPlantCount;
    for (let t = 0; t < weeks; t++) {
        plants *= growthRate;
    }
    if(plants > 0.8 * maxPlants){
        return "Pruned";
    }
    else if(plants >= 0.5 * maxPlants){
        return "Monitored";
    }
    else{
        return "Planted"
    }
}

console.log(predictGrowth(1));
console.log(predictGrowth(2));
console.log(predictGrowth(3));