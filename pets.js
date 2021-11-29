const makeFavoriteString = (dogBreed) => {
  if (!dogBreed) {
    const faveCatString = "When it comes to pets, I like cats";
    return faveCatString;
  } else {
    let faveDogString = `When it comes to pets, my favorite dog breed is ${dogBreed}`;
    return faveDogString;
  }
};
const currentDogString = makeFavoriteString("German Shepherd");
const currentCatString = makeFavoriteString();

console.log(currentDogString);
console.log(currentCatString);
