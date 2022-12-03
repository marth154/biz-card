import { Button, Group, Header } from "@mantine/core";
import getLocaleStorage from "../utils/function/getLocalStorage";
import useStyles from "../utils/style";

export default function LayoutSharedProfile({ children }) {
  const { classes } = useStyles();
  const { user } = getLocaleStorage();

  return (
    <>
      <Header height={60} className={classes.header} sx={{justifyContent: "right"}} mb={120} mr={50}>
        <Group spacing="xl">
          <Button>Retour à mon profile</Button>
        </Group>
      </Header>
      {children}
      <div className={classes.footer}>
        <Group spacing="xl">
          <Button
            onClick={() => {
              window.location.href = `/${user.id}`;
            }}
          >
            Retour à mon profile
          </Button>
        </Group>
      </div>
    </>
  );
}
