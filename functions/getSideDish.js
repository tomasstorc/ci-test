const pole = require("./inputFile");

function getDumplings(pole) {
  let sum = 0;
  pole.forEach((element) => {
    sum += +element.sideDish;
  });
  return sum;
}
module.exports = getDumplings;
