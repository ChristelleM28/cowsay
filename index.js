const infos = require("./informations");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `I am ${infos.myName} from ${infos.myCampus}`,
    e: "oO",
    T: "U",
  })
);
