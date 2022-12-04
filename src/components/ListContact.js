import { Button } from "@mantine/core";

export default function ListContact() {
  const props = ["name", "email", "tel", "address", "icon"];
  const opts = { multiple: true };

  async function getContacts() {
    try {
      const contacts = await navigator.contacts.select(props, opts);
      console.log(contacts);
    } catch (ex) {
      // Handle any errors here.
    }
  }
  console.log(navigator.contacts);

  return (
    <>
      <Button onClick={() => getContacts()}>Contacts </Button>
    </>
  );
}
