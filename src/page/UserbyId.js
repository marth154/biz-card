import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClientAPI from "../client/clientApi";
import MyProfile from "../components/MyProfile";
import ShareProfile from "../components/ShareProfile";
import getLocaleStorage from "../utils/getLocalStorage";

export default function UserbyId() {
  const { id } = useParams();
  const user = getLocaleStorage();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await new ClientAPI(`/user/${id}`).get();
      } catch (error) {
        window.location.href = "/404";
      }
    };
    fetchUser();
  }, [id]);

  if (id === JSON.parse(user.id)) {
    return <MyProfile />;
  } else {
    return <ShareProfile />;
  }
}
