const getAge = require("../functions/getAge");

test("get right age", () => {
  expect(getAge(1998)).toBe(22);
});
