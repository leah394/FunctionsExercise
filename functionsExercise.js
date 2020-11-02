 function spookyGhost(){
  console.log(`Boo!!!`);
}
spookyGhost();
console.log(`=========================`);

function candy(goal){
  console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
}
candy(`Get Candy`);
console.log(`=========================`);


function werewolf(a, b){
  if (a === "Full" && b === "Moon"){
  console.log("ARH-WOOO!");
  }
}
werewolf("Full", "Moon");
console.log(`=========================`);

function halloween(){
  return `October 31st`;
}
let day = halloween();
console.log(day);
console.log(`=========================`);

function isEnoughCandy(pieces){
  if (pieces >= 31){
    return true;
  } else {
    return false;
  }
}
console.log(isEnoughCandy(31));
console.log(`=========================`);

function candyCounter(num){
  let total = 0;
  for (n of num){
    total = total + n;
  }
  return total;
}
candyCounter([2, 3, 4, 5]);
candyCounter([2, 3, 4, 5, 6, 6]);

const hauntedMansion = function(){
  console.log(`Welcome, foolish mortals, to the Haunted Mansion!`);
}

const ghostbusters = () => (`Who You Gonna Call?`);
console.log(ghostbusters());
console.log(`=========================`);

// 9
// No

// 10
// Yes

const costumes = [`Ghost`, `Hobo`, `Superman`];
const upperCostumes = costumes.map(costumes => costumes.toUpperCase());
console.log(upperCostumes);