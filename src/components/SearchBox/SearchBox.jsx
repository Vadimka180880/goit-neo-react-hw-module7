import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa"; 

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        <FaSearch className={styles.icon} /> {}
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Find contacts by name"
          className={styles.searchInput}
        />
      </label>
    </div>
  );
};

export default SearchBox;