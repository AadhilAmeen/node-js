const manager = require("./managerInfo");
const capitalizeName = require("./capitalizeName");

// Capitalize manager name
const formattedName = capitalizeName(manager.name);

// Convert role to uppercase
const upperRole = manager.role.toUpperCase();

// Count characters in role
const roleLength = manager.role.length;

// Search for the word "inventory"
const searchResult = manager.role.search("inventory");

// Print results
console.log("Manager Name:", formattedName);
console.log("Manager Role:", upperRole);
console.log("Role Character Count:", roleLength);
console.log('Search Result for "inventory":', searchResult);