import { FaUser, FaPhone, FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
    return (
        <li className={styles.contact}>
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
            <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>
                <FaTrash /> {}
            </button>
        </li>
    );
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;