const getDumplings = require("../functions/getSideDish");
const pole = require("../functions/inputFile");

test("get number of dumplings", () => {
  expect(getDumplings(pole)).toBe(15);
});
