function capitalizeName(fullName) {
  let words = fullName.split(" ");

  let firstName =
    words[0].charAt(0).toUpperCase() + words[0].slice(1);

  let lastName =
    words[1].charAt(0).toUpperCase() + words[1].slice(1);

  return firstName + " " + lastName;
}

module.exports = capitalizeName;