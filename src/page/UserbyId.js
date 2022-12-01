import { Container } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientAPI from "../client/clientApi";
import MyProfile from "../components/MyProfile";
import SharedProfile from "../components/SharedProfile";
import getLocaleStorage from "../utils/getLocalStorage";

export default function UserbyId() {
  const { id } = useParams();
  const [coord, setCoord] = useState();
  const user = getLocaleStorage();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await new ClientAPI(`/user/${id}`).get();
      } catch (error) {
        window.location.href = "/404";
      }
      try {
        const res = await new ClientAPI(`/coord`).get();
        setCoord(res.data);
      } catch (error) {}
    };
    fetchUser();
  }, [id]);
  return (
    <>
      <Container>
        {id === JSON.parse(user.id) ? (
          <MyProfile coord={coord} />
        ) : (
          <SharedProfile />
        )}
      </Container>
    </>
  );
}
