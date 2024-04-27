import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <span className={css.formErrorMessage}>Too short!</span>)
    .max(50, <span className={css.formErrorMessage}>Too long!</span>)
    .required(<span className={css.formErrorMessage}>Required</span>),
  number: Yup.string()
    .min(3, <span className={css.formErrorMessage}>Too short!</span>)
    .max(50, <span className={css.formErrorMessage}>Too long!</span>)
    .test(
      "phone-format",
      <span className={css.formErrorMessage}>Invalid phone number format</span>,
      (value) => /^[0-9+()-]+$/.test(value)
    )
    .required(<span className={css.formErrorMessage}>Required</span>),
});

const initialValues = { name: "", number: "" };
const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const onAdd = (values) => {
      const finalContact = {
        name: values.name,
        number: values.number,
      };
      dispatch(addContact(finalContact));
    };
    onAdd(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" as="span" />
        </div>

        <div className={css.formContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" as="span" />
        </div>

        <button className={css.formAddBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
