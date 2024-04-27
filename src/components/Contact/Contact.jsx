import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contactDataContainer}>
        <p className={css.contactData}>
          <FaUser /> {name}
        </p>
        <a href={"tel:+" + number} className={css.contactData}>
          <FaPhoneAlt /> {number}
        </a>
      </div>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
