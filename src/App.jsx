import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import styles from "./App.module.css";

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts
    .filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;