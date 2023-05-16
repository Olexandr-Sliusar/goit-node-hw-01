const argv = require("yargs").argv;

const contactsService = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsService.listContacts();
      return console.table(contacts);
    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case "remove":
      const removeContact = await contactsService.removeContact(id);
      return console.log(removeContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
