import { ActionIcon, Button, Group, Header } from "@mantine/core";
import { IconLink, IconQrcode } from "@tabler/icons";
import { useState } from "react";
import GenerateQRCode from "../components/GenerateQRCode";
import useStyles from "../utils/style";


export default function LayoutProfile({ children }) {
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
        <Group spacing="xl" className={classes.groupFooter}>
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
