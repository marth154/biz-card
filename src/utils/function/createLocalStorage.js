function createLocalStorage(res) {
  localStorage.setItem("user", JSON.stringify(res));
}

module.exports = createLocalStorage;
