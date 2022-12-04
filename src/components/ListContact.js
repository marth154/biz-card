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
      var contact = navigator.contacts.create({
        displayName: "Martin",
        name: "Martin Test",
        birthday: "birthday",
        note: "DeleteMe",
      });
      contact.save(
        function (e) {
          console.log(e);
        },
        function (e) {
          console.log(e);
        }
      );
      console.log("contact", contact)
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <Button onClick={() => getContacts()}>Get Contacts </Button>
      <Button onClick={() => createContacts()}>Create Contacts </Button>
    </>
  );
}
