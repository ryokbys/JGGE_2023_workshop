function authorShort(authorString) {
  const authors = authorString.split(", ");
  let abbrAuthorString = ""
  if (authors.length == 1) {
      const parts = authors[0].split(" ")
      abbrAuthorString = parts[parts.length-1];
  }
  else if (authors.length == 2) {
      let surnames = [];
      authors.forEach(author => {
        const parts = author.split(" ");
        surnames.push(parts[parts.length-1]);
      })
      abbrAuthorString = `${surnames[0]} and ${surnames[1]}`;
  } else {
      const first = authors[0].split(" ")
      const surname = first[first.length - 1];
      abbrAuthorString = `${surname} et al.`;
  }
  return abbrAuthorString
}

module.exports = authorShort;
