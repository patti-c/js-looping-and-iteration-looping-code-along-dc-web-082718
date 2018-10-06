function printBadges(name_array) {
  for(let i = 0; i < name_array.length; i++) {
    console.log(`Welcome ${name_array[i]}! You are employee #${i+1}.`);
  }
  return name_array
}

function tailsNeverFails() {

  function coinFlip() {
    return Math.random() >= 0.5;
  }

  let tails = 0;

  while(coinFlip()) {
    tails +=1;
  }

  return `You got ${tails} tails in a row!`

}
