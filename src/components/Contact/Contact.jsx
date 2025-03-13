import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaUser, FaPhone, FaTrash } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <FaUser className={styles.icon} />
          <span className={styles.name}>{contact.name}</span>
        </div>
        <div className={styles.infoItem}>
          <FaPhone className={styles.icon} />
          <span className={styles.number}>{contact.number}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default Contact;