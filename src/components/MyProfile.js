import { Button, /* Loader,  */ Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { /* useEffect, */ useEffect, useState } from "react";
import ClientAPI from "../client/clientApi";
import GenerateQRCode from "./GenerateQRCode";

export default function MyProfile({ coord }) {
  // const [loader, setLoader] = useState(true);
  // const [email, setEmail] = useState();
  // const [phone, setPhone] = useState();
  // const [place, setPlace] = useState();
  const [openQR, setOpenQR] = useState(false);
  // const isToUpdate = email || phone || place;
  // const [disabledButton, setDisabledButton] = useState(true);

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const res = await new ClientAPI("/coord").get();
  //       if (res) {
  //         const { email, place, phone } = res.data;
  //         setEmail(email);
  //         setPhone(phone);
  //         setPlace(place);
  //         setDisabledButton(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetch();
  //   setLoader(false);
  // }, []);

  const handleSubmit = async (values) => {
    const { email, phone, place } = values;
    try {
      if (coord) {
        await new ClientAPI("/coord").put({
          email,
          phone,
          place,
        });
      } else {
        await new ClientAPI("/coord").post({
          email,
          phone,
          place,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm({
    initialValues: {
      email: coord ? coord.email : "",
      phone: coord ? coord.phone : "",
      place: coord ? coord.place : "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  useEffect(() => {
    if (coord) {
      form.setFieldValue("email", coord.email);
      form.setFieldValue("phone", coord.phone);
      form.setFieldValue("place", coord.place);
    }
  }, [coord]);

  if (openQR)
    return <GenerateQRCode link={window.location.href} setOpenQR={setOpenQR} />;

  return (
    <>
      <Text fz="xl" fw={600}>
        Ma carte de visite
      </Text>
      <Stack sx={{ flexDirection: "column" }} spacing="sm">
        {/* TODO Validation */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            label="Email"
            placeholder="Entrez votre email de contact"
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Téléphone"
            placeholder="Entrez votre numéro"
            {...form.getInputProps("phone")}
          />
          <TextInput
            label="Adresse"
            placeholder="Entrez votre adresse"
            {...form.getInputProps("place")}
          />
          <Button type="submit">{coord ? "Modifier" : "Créer"}</Button>
        </form>
      </Stack>

      <Button onClick={() => setOpenQR(true)}>Partager mon profile</Button>
    </>
  );
}
