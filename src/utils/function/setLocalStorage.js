export default function setCoordLocalStorage(coord, user) {
  coord && localStorage.setItem("coord", JSON.stringify(coord));
  user && localStorage.setItem("user", JSON.stringify(user));
}
