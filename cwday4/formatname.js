function formatName(fullName) {
  const names = fullName.split(" ");

  let formatted = "";

  for (let i = 0; i < names.length; i++) {
    const firstLetter = names[i].charAt(0).toUpperCase();
    const remainingLetters = names[i].slice(1);

    formatted += firstLetter + remainingLetters;

    if (i !== names.length - 1) {
      formatted += " ";
    }
  }

  return formatted;
}

module.exports = formatName;