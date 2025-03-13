import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { FaUser, FaPhone, FaTrash } from "react-icons/fa"; 

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FaUser className={styles.icon} /> {}
              <span className={styles.name}>{contact.name}</span>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.icon} /> {}
              <span className={styles.number}>{contact.number}</span>
            </div>
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <FaTrash /> {}
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;