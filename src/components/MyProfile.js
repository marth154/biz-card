import getLocaleStorage from "../utils/getLocalStorage";

export default function MyProfile() {
  const user = getLocaleStorage();

  return <p>{user.name}</p>;
}
