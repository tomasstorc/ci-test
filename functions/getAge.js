function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  return age;
}
module.exports = calculateAge;
