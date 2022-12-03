function getLocaleStorage() {
  return {
    user: JSON.parse(localStorage.getItem("user")),
    coord: JSON.parse(localStorage.getItem("coord")),
  };
}

module.exports = getLocaleStorage;
