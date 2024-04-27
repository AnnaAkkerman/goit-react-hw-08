import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
// import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (contacId) => {
    dispatch(deleteContact(contacId));
  };

  return (
    <div>
      PHONEBOOK
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {/* {isError && <ErrorMessage />} */}
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </div>
  );
};

export default ContactsPage;
