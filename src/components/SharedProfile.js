import { Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import ClientAPI from "../client/clientApi";
import ProgressSpinner from "../utils/components/ProgressLoader";
import displayIconByProperty, { handleLink } from "../utils/iconSharedProfile";
import useStyles from "../utils/style";


export default function ShareProfile({ id }) {
  const { classes } = useStyles();
  const [coord, setCoord] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await new ClientAPI(`/coord/${id}`).get();
        setCoord(res.data);
      } catch (error) {}
      setLoader(false);
    };
    fetchUser();
  }, [id]);

  if (loader) return <ProgressSpinner />;

  return (
    <>
      <Text fz="xl" fw={600}>
        Ma carte de {coord.name}
      </Text>
      <Stack spacing="sm" mt={15}>
        <Stack className={classes.container}>
          {displayIconByProperty("email", coord.email)}
          <Text size="md" onClick={() => handleLink(coord.email, "email")}>
            {coord.email}
          </Text>
        </Stack>
        <Stack className={classes.container}>
          {displayIconByProperty("phone", coord.phone)}
          <Text size="md" onClick={() => handleLink(coord.phone, "phone")}>
            {coord.phone}
          </Text>
        </Stack>

        <Stack className={classes.container}>
          {displayIconByProperty("place", coord.place)}
          <Text size="md" onClick={() => handleLink(coord.place, "place")}>
            {coord.place}
          </Text>
        </Stack>
      </Stack>
      <Stack sx={{ flexDirection: "row" }} justify="center" mt={45}>
        <Stack className={classes.container}>
          {displayIconByProperty("linkedin", coord.linkedin)}
        </Stack>

        <Stack className={classes.container}>
          {displayIconByProperty("youtube", coord.youtube)}
        </Stack>

        <Stack className={classes.container}>
          {displayIconByProperty("instagram", coord.instagram)}
        </Stack>

        <Stack className={classes.container}>
          {displayIconByProperty("facebook", coord.facebook)}
        </Stack>
      </Stack>
    </>
  );
}
