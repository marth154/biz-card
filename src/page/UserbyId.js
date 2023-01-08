import { Container } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientAPI from "../client/clientApi";
import MyProfile from "../components/MyProfile";
import SharedProfile from "../components/SharedProfile";
import LayoutProfile from "../layout/LayoutProfile";
import LayoutSharedProfile from "../layout/LayoutSharedProfile";
import getLocaleStorage from "../utils/function/getLocalStorage";
import setCoordLocalStorage from "../utils/function/setLocalStorage";

export default function UserbyId() {
  const { id } = useParams();
  const [coord, setCoord] = useState();
  const { user } = getLocaleStorage();

  const fetchCoord = async () => {
    try {
      const res = await new ClientAPI(`/coord`).get();
      res.data && setCoordLocalStorage(res.data);
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
        <LayoutProfile>
          <Container sx={{ paddingBottom: "2.5rem" }}>
            <MyProfile coord={coord} fetchCoord={fetchCoord} />
          </Container>
        </LayoutProfile>
      ) : (
        <LayoutSharedProfile>
          <Container>
            <SharedProfile id={id} />
          </Container>
        </LayoutSharedProfile>
      )}
    </>
  );
}
