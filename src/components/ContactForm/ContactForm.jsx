import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { nanoid } from "nanoid"; 

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(number)) {
      setError("Invalid phone number format! Use 000:00:00");
      return; 
    }

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return; 
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName("");
    setNumber("");
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <FaUser className={styles.icon} />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        <FaPhone className={styles.icon} />
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number (000-00-00)"
          required
          className={styles.input}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;