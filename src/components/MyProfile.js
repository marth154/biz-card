import { useState } from "react";
import ClientAPI from "../client/clientApi";
import getLocaleStorage from "../utils/getLocalStorage";

export default function MyProfile() {
  const user = getLocaleStorage();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = async () => {
    try {
      await new ClientAPI("/coord").post(
        {
          email,
          phone,
          place,
        },
        {
          id: user.id,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Ma carte de visite</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Téléphone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Adresse"
        onChange={(e) => setPlace(e.target.value)}
      />

      <button onClick={() => handleSubmit()}>Créer</button>
    </>
  );
}
