const user = require("./userInfo");
const formatName = require("./formatName");

const formattedName = formatName(user.name);

const upperCaseHobby = user.hobby.toUpperCase();

const hobbyLength = user.hobby.length;

console.log("Formatted Name:", formattedName);
console.log("Hobby in Uppercase:", upperCaseHobby);
console.log("Hobby Length:", hobbyLength);