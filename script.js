const cookingMethod = ["boiled", "fried", "pulled", "baked", "BBQ'd", "roasted"];
const proteinType = ["chicken", "beef", "pork", "duck", "turkey", "ham"];
const servedWith = ["seasonal veg", "chips", "rice", "lentils", "a tortilla wrap", "nachoes", "potatoes"];
const weeExtras = ["siracha", "tobacco onions", "mustard mayo", "pickled onions", "sundried toamtoes"];

const getRandomElement = array => {
    let arrayPosition = Math.floor(Math.random() * array.length);
    let randomElement = array[arrayPosition];
    return randomElement;
};

console.log("Tonight for dinner, you are having " + getRandomElement(cookingMethod) + " " + getRandomElement(proteinType) + " served with " + getRandomElement(servedWith) + ". If you'd like to jazz it up then try adding " + getRandomElement(weeExtras) + ". Enjoy!");
