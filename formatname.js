function formatName(fullName) {
  let firstSpace = fullName.indexOf(" ");
  
  let firstName = fullName.slice(0, firstSpace);
  let lastName = fullName.slice(firstSpace + 1);

  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return firstName + " " + lastName;
}

module.exports = formatName;