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

  async function createContacts() {
    // create

    var displayName = "DispplayName";
    var nickname = "Nickename";

    var contact = navigator.contacts.create();
    contact.displayName = displayName;
    contact.nickname = nickname;

    contact.name = "Name Lastname";

    // save
    contact.save(onSaveSuccess, onSaveError);

    // onSaveSuccess: Get a snapshot of the current contacts

    console.log("Contact");
  }
  const onSaveSuccess = (contact) => {
    alert("Save Success");
  };

  // onSaveError: Failed to get the contacts
  const onSaveError = (contactError) => {
    alert("Error = " + contactError.code);
  };
  return (
    <>
      <Button onClick={() => getContacts()}>Get Contacts </Button>
      <Button onClick={() => createContacts()}>Create Contacts </Button>
    </>
  );
}
