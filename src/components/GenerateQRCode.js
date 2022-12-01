import { CloseButton, Group, Stack } from "@mantine/core";
import QRCode from "react-qr-code";

export default function GenerateQRCode({ setOpenQR, link }) {
  return (
    <>
      <Group position="right" sx={{ marginTop: 10 }}>
        <CloseButton onClick={() => setOpenQR(false)} size="xl" />
      </Group>
      <Stack justify="center" align="center" sx={{ height: "90vh" }}>
        <QRCode
          size={240}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={link}
          viewBox={`0 0 256 256`}
        />
      </Stack>
    </>
  );
}
