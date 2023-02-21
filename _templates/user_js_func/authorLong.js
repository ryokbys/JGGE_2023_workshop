function authorLong(authorString) {
  const authors = authorString.split(", ");
  let fullAuthorList = [];
  authors.forEach(author => {
      const parts = author.split(" ");
      let str = [];
      str.push(parts[parts.length-1]);
      const name_parts = parts.slice(0, parts.length-1);
      name_parts.forEach(name => {
        str.push(", ");
        str.push(`${name[0]}.`);
      });
      fullAuthorList.push(str.join(""))
  });
  return fullAuthorList.join(", ")
}

module.exports = authorLong;
