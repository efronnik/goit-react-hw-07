import css from "./SearchBox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../redux/filtersSlice";
import {selectNameFilter} from "../../redux/selectors.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const onChange = (e) => {
    const {value} = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filterName}
        onChange={onChange}
      />
    </label>
  );
};

export default SearchBox;
