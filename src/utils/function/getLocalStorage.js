function getLocaleStorage() {
  return {
    user: JSON.parse(localStorage.getItem("user"))
  };
}

module.exports = getLocaleStorage;
