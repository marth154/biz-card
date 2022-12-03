import GenerateQRCode from "../components/GenerateQRCode";
import getLocaleStorage from "../utils/function/getLocalStorage";

export default function ShareQRCOde() {
  const { user } = getLocaleStorage();

  if (!user) window.location.href = `/`;

  return (
    <>
      <GenerateQRCode link={`${window.location.origin}/user/${user.id}`} />
    </>
  );
}
