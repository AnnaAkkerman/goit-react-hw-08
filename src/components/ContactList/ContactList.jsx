import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {Array.isArray(contacts) && contacts.length === 0 && (
        <li>You don&apos;t have any added contacts yet!</li>
      )}
      {Array.isArray(contacts) &&
        contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactItem} key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
