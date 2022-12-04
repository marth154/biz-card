import { Button } from "@mantine/core";

export default async function ListContact() {
  const props = await navigator.contacts.getProperties();
//   const list = document.querySelector("#contacts");

//   list.innerHTML = "";

  const showContacts = async () => {
    const contacts = await navigator.contacts.select(props, {
      multiple: true,
    });
    // const html = contacts.reduce((html, contact) => {
    //   const names = contact.name.join(", ");
    //   const emails = contact.email.join(", ");
    //   const telephone = contact.tel.join(", ");

    //   return `${html}
    //     <p>
    //       <span>
    //         <i class="material-icons">person</i>
    //         <strong>${names}</strong><br>
    //       </span>
    //       <span>
    //         <i class="material-icons">mail_outline</i>
    //         ${emails}<br>
    //       </span>
    //       <span>
    //         <i class="material-icons">phone</i>
    //         ${telephone}</p>
    //       </span>
    //     `;
    // }, ``);

    contacts.map((contact) => console.log(contact))

  };


  return <Button onClick={() => showContacts()}>Show contact</Button>;
}
