function getLocaleStorage() {
  return {
    id: localStorage.getItem("id"),
    googleId: localStorage.getItem("googleId"),
    imagUrl: localStorage.getItem("imagUrl"),
    email: localStorage.getItem("email"),
    givenName: localStorage.getItem("givenName"),
    familyName: localStorage.getItem("familyName"),
    name: localStorage.getItem("name"),
    accessToken: localStorage.getItem("accessToken"),
  };
}

module.exports = getLocaleStorage;
