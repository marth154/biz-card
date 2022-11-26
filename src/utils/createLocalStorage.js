function createLocalStorage(res) {
  console.log(res)
  const {
    id,
    googleId,
    imagUrl,
    email,
    givenName,
    familyName,
    name,
    accessToken,
  } = res;
  localStorage.setItem("id", JSON.stringify(id));
  localStorage.setItem("googleId", JSON.stringify(googleId));
  localStorage.setItem("imagUrl", JSON.stringify(imagUrl));
  localStorage.setItem("email", JSON.stringify(email));
  localStorage.setItem("givenName", JSON.stringify(givenName));
  localStorage.setItem("familyName", JSON.stringify(familyName));
  localStorage.setItem("name", JSON.stringify(name));
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
}

module.exports = createLocalStorage;
