import { Stack, Text } from "@mantine/core";
import {
  IconAt,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconHome,
  IconPhone
} from "@tabler/icons";
import { useEffect, useState } from "react";
import ClientAPI from "../client/clientApi";
import ProgressSpinner from "../utils/components/ProgressLoader";

const displaying = {
  email: {
    icon: <IconAt />,
    link: true,
  },
  place: {
    icon: <IconHome />,
    link: true,
  },
  phone: {
    icon: <IconPhone />,
    link: true,
  },
  linkedin: {
    icon: <IconBrandLinkedin color="#00abfb" />,
    link: true,
  },
  youtube: {
    icon: <IconBrandYoutube color="#ee0f0f" />,
    link: true,
  },
  instagram: {
    icon: <IconBrandInstagram color="#833ab4" />,
    link: true,
  },
  facebook: {
    icon: <IconBrandFacebook color="#5c79ff" />,
    link: true,
  },
};

export default function ShareProfile({ id }) {
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

  const handleLink = (link, key) => {
    switch (key) {
      case "email":
        window.location.href = `mailto:${link}`;
        break;
      case "phone":
        window.location.href = `tel:${link}`;
        break;
      case "place":
        window.location.href = `maps:${link}`;
        break;
      default:
        window.location.href = link;
    }
  };

  if (loader) return <ProgressSpinner />;
  delete coord._id;
  delete coord.user_id;
  delete coord.__v;

  return (
    <>
      <Text fz="xl" fw={600}>
        Ma carte de {coord.name}
      </Text>
      <Stack spacing="sm">
        {delete coord.name}
        {Object.keys(coord).map((c) => {
          return (
            <Stack
              sx={{
                flexDirection: "row",
                cursor: displaying[c].link ? "pointer" : "default",
                textDecoration: displaying[c].link ? "underline" : "",
                color: displaying[c].link ? "underline" : "",
              }}
              onClick={() => {
                displaying[c].link && handleLink(coord[c], c);
              }}
            >
              <>
                {displaying[c].icon}
                {coord[c]}
              </>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}
