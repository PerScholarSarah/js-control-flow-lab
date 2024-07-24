const pi = 3.14159;
const radius = 5;
const minSpacePerPlant = 0.8;
const growthRate = 2;

const plantingArea = pi * radius * radius;

const predictGrowth = (initialPlantCount, weeks) =>{
    let plants = initialPlantCount;
    for (let t = 0; t < weeks; t++) {
        plants *= growthRate;
    }
    return plants;
}

const giveAdvice = (plants) =>
{
    try {
        let minArea = plants * minSpacePerPlant;
        if(minArea > 0.8 * plantingArea){
            console.log("Pruned");
        }
        else if(minArea >= 0.5 * plantingArea){
            console.log("Monitored");
        }
        else{
        console.log("Planted");
        }
        if(minArea > plantingArea){
            throw(`SoilOverflowError: ${plants} plants need ${minArea}m2! We only have ${plantingArea}m2...`);
        }
    } catch (msg) {
        console.error(msg);
    }
    
}

const neededRadius = (numPlants) => {
    let newArea = numPlants * minSpacePerPlant;
    let newRadius = Math.sqrt(newArea / pi);
    return newRadius;
}

let oneweek = predictGrowth(20, 1);
giveAdvice(oneweek);

let twoweeks = predictGrowth(20, 2);
giveAdvice(twoweeks);

let threeweeks = predictGrowth(20, 3);
giveAdvice(threeweeks);


let newProposal = predictGrowth(100, 10);
let expandedRadius = neededRadius(newProposal);

console.log(`If you start with 100 plants, after 10 weeks you'll need a circle with radius ${expandedRadius}m`);

giveAdvice(newProposal);
