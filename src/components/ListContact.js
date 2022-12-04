import { Button } from "@mantine/core";

export default function ListContact() {
  const props = ["name", "email", "tel", "icon"];
  const opts = { multiple: true };

  async function getContacts() {
    try {
      const contacts = await navigator.contacts.select(props, opts);
      console.log(contacts);
    } catch (ex) {
      // Handle any errors here.
    }
  }

  async function createContacts(email, name, tel) {
    try {
      const contacts = await navigator.contacts.save({
        address: [""],
        email: ["martin@grimp.io"],
        name: ["Martin Test"],
        tel: []
      })
      console.log(contacts);
    } catch (ex) {
      // Handle any errors here.
    }
  }
  console.log(navigator.contacts);

  return (
    <>
      <Button onClick={() => getContacts()}>Get Contacts </Button>
      <Button onClick={() => createContacts()}>Create Contacts </Button>
    </>
  );
}
