import { ActionIcon, Button, createStyles, Group, Header } from "@mantine/core";
import { IconLink, IconQrcode } from "@tabler/icons";
import { useState } from "react";
import GenerateQRCode from "../components/GenerateQRCode";

const useStyles = createStyles((theme) => ({
  footer: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
    display: "flex",
    position: "absolute",
    bottom: 0,
    zIndex: 999,
    width: "100%",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  header: {
    display: "flex",
    justifyContent: "center",
    borderBottom: 0,
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));
export default function LayoutShareProfile({ children }) {
  const [openQR, setOpenQR] = useState(false);
  const { classes } = useStyles();

  if (openQR)
    return <GenerateQRCode link={window.location.href} setOpenQR={setOpenQR} />;
  return (
    <>
      <Header height={60} className={classes.header} mb={120}>
        <Group spacing="xl">
          <Button onClick={() => setOpenQR(true)}>
            Partager via le QR Code
          </Button>
          <Button>Partager via le lien</Button>
        </Group>
      </Header>
      {children}
      <div className={classes.footer}>
        <Group spacing="xl">
          <ActionIcon
            size="xl"
            variant="default"
            radius="xl"
            onClick={() => setOpenQR(true)}
          >
            <IconQrcode size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="xl" variant="default" radius="xl">
            <IconLink size={25} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </>
  );
}
