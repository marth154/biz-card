import { CloseButton, Group } from "@mantine/core";
import QRCode from "react-qr-code";

export default function GenerateQRCode({ setOpenQR, link }) {
  return (
    <>
      <Group position="right" sx={{ marginTop: 10 }}>
        <CloseButton onClick={() => setOpenQR(false)} size="xl" />
      </Group>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 256,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%", border: "white 5px solid" }}
          value={link}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
  );
}
