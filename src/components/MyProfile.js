import {
  Accordion,
  Button,
  Notification,
  Stack,
  Text,
  TextInput
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconCheck
} from "@tabler/icons";
import { useEffect, useState } from "react";
import ClientAPI from "../client/clientApi";
import ProgressSpinner from "../utils/components/ProgressLoader";
import disabledProfileForm from "../utils/function/disabledProfileForm";
import {
  regexEmail,
  regexPhone,
  regexUrlFacebook,
  regexUrlInstagram,
  regexUrlLinkedin,
  regexUrlYoutube
} from "../utils/regexForm";
import ListContact from "./ListContact";

export default function MyProfile({ coord, fetchCoord }) {
  const [openNotif, setOpenNotif] = useState(false);

  const handleSubmit = async (values) => {
    const {
      name,
      email,
      phone,
      place,
      linkedin,
      youtube,
      instagram,
      facebook,
    } = values;
    try {
      let res;
      if (coord) {
        res = await new ClientAPI("/coord").put({
          name,
          email,
          phone,
          place,
          linkedin,
          youtube,
          instagram,
          facebook,
        });
      } else {
        res = await new ClientAPI("/coord").post({
          name,
          email,
          phone,
          place,
          linkedin,
          youtube,
          instagram,
          facebook,
        });
      }
      if (res) {
        setOpenNotif(true);
        setTimeout(() => setOpenNotif(false), 3000);
      }
      fetchCoord();
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm({
    initialValues: {
      name: coord ? coord.name : "",
      email: coord ? coord.email : "",
      phone: coord ? coord.phone : "",
      place: coord ? coord.place : "",
      linkedin: coord ? coord.linkedin : "",
      youtube: coord ? coord.youtube : "",
      instagram: coord ? coord.instagram : "",
      facebook: coord ? coord.facebook : "",
    },
    validate: {
      name: (value) => (value ? null : "Nom est obligatoire"),
      email: (value) => (regexEmail.test(value) ? null : "Email incorrect"),
      phone: (value) => (regexPhone.test(value) ? null : "Téléphone incorrect"),
      linkedin: (value) =>
        regexUrlLinkedin.test(value) || !value
          ? null
          : "Url Linkedin incorrect",
      youtube: (value) =>
        regexUrlYoutube.test(value) || !value ? null : "Url Youtube incorrect",
      instagram: (value) =>
        regexUrlInstagram.test(value) || !value
          ? null
          : "Url Instagram incorrect",
      facebook: (value) =>
        regexUrlFacebook.test(value) || !value
          ? null
          : "Url Facebook incorrect",
    },
  });

  useEffect(() => {
    if (coord) {
      form.setFieldValue("name", coord.name);
      form.setFieldValue("email", coord.email);
      form.setFieldValue("phone", coord.phone);
      form.setFieldValue("place", coord.place);
      form.setFieldValue("linkedin", coord.linkedin);
      form.setFieldValue("youtube", coord.youtube);
      form.setFieldValue("instagram", coord.instagram);
      form.setFieldValue("facebook", coord.facebook);
    }
  }, [coord]);
  if (!coord) return <ProgressSpinner />;

  return (
    <>
      {navigator.contacts && <ListContact />}
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack
          justify="space-between"
          sx={{ flexDirection: "row", paddingTop: 25 }}
        >
          <Text fz="xl" fw={600}>
            Ma carte de visite
          </Text>

          <Button
            type="submit"
            disabled={disabledProfileForm(coord, form.values)}
          >
            {coord ? "Modifier" : "Créer"}
          </Button>
        </Stack>
        <Stack sx={{ flexDirection: "column" }} spacing="sm">
          <TextInput
            label="Nom"
            placeholder="Entrez le nom de votre entreprise"
            {...form.getInputProps("name")}
          />
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
          <Accordion defaultValue="socialNetwork">
            <Accordion.Item value="socialNetwork">
              <Accordion.Control>Mes réseaux</Accordion.Control>
              <Accordion.Panel>
                <TextInput
                  icon={<IconBrandLinkedin color="#00abfb" />}
                  label="Linkedin"
                  placeholder="Linkedin"
                  {...form.getInputProps("linkedin")}
                />
                <TextInput
                  icon={<IconBrandInstagram color="#833ab4" />}
                  label="Instagram"
                  placeholder="Instagram"
                  {...form.getInputProps("instagram")}
                />
                <TextInput
                  icon={<IconBrandYoutube color="#ee0f0f" />}
                  label="Youtube"
                  placeholder="Youtube"
                  {...form.getInputProps("youtube")}
                />
                <TextInput
                  icon={<IconBrandFacebook color="#5c79ff" />}
                  label="Facebook"
                  placeholder="Facebook"
                  {...form.getInputProps("facebook")}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </form>

      {openNotif && (
        <Notification
          icon={<IconCheck size={18} />}
          color="teal"
          title="Modifié avec succès"
          disallowClose
        ></Notification>
      )}
    </>
  );
}
