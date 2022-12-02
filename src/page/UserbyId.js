import { Container } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientAPI from "../client/clientApi";
import MyProfile from "../components/MyProfile";
import SharedProfile from "../components/SharedProfile";
import LayoutShareProfile from "../layout/LayoutShareProfile";
import getLocaleStorage from "../utils/function/getLocalStorage";
import setCoordLocalStorage from "../utils/function/setCoordLocalStorage";

export default function UserbyId() {
  const { id } = useParams();
  const [coord, setCoord] = useState();
  const { user } = getLocaleStorage();

  const fetchCoord = async () => {
    try {
      const res = await new ClientAPI(`/coord`).get();
      setCoordLocalStorage(res.data);
      setCoord(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await new ClientAPI(`/user/${id}`).get();
      } catch (error) {
        window.location.href = "/404";
      }
      fetchCoord();
    };
    fetchUser();
  }, [id]);

  return (
    <>
      {user && id === user.id ? (
        <LayoutShareProfile>
          <Container>
            <MyProfile coord={coord} fetchCoord={fetchCoord} />
          </Container>
        </LayoutShareProfile>
      ) : (
        <Container>
          <SharedProfile id={id} />
        </Container>
      )}
    </>
  );
}
