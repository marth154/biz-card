import {
    IconAt,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandYoutube,
    IconHome,
    IconPhone
} from "@tabler/icons";

export default function displayIconByProperty(key, link) {
  const displaying = {
    email: {
      icon: <IconAt />,
    },
    place: {
      icon: <IconHome />,
    },
    phone: {
      icon: <IconPhone />,
    },
    linkedin: {
      icon: (
        <IconBrandLinkedin
          color="#00abfb"
          size={45}
          onClick={() => handleLink(link, key)}
        />
      ),
    },
    youtube: {
      icon: (
        <IconBrandYoutube
          color="#ee0f0f"
          size={45}
          onClick={() => handleLink(link, key)}
        />
      ),
    },
    instagram: {
      icon: (
        <IconBrandInstagram
          color="#833ab4"
          size={45}
          onClick={() => handleLink(link, key)}
        />
      ),
    },
    facebook: {
      icon: (
        <IconBrandFacebook
          color="#5c79ff"
          size={45}
          onClick={() => handleLink(link, key)}
        />
      ),
    },
  };

  return displaying[key].icon;
}

export const handleLink = (link, key) => {
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
