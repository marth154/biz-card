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
      var results = document.getElementById("contact_results");
      var contact = navigator.contacts.create({
        displayName: "Martin",
        name: "Martin Test",
        birthday: "birthday",
        note: "DeleteMe",
      });

      var phoneNumbers = [1];
      phoneNumbers[0] = new ContactField("work", 0987654321, true);
      contact.phoneNumbers = phoneNumbers;

      contact.save(
        function () {
          results.innerHTML = (displayName || "Nameless contact") + " saved.";
        },
        function (e) {
          if (e.code === ContactError.NOT_SUPPORTED_ERROR) {
            results.innerHTML = "Saving contacts not supported.";
          } else {
            results.innerHTML = "Contact save failed: error " + e.code;
          }
        }
      );
    } catch (e) {
      console.error(e.message);
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
