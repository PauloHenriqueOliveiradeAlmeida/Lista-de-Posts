import P from "prop-types";

import "./styles.css";

function SearchInput({handleChange, searchValue}) {
    return (
        <input
        className="search-input"
        type="search"
        placeholder="Pesquisar..."
        value={searchValue}
        onChange={handleChange} />
    )
}

export default SearchInput;


SearchInput.propTypes = {
	handleChange: P.func.isRequired,
	searchValue: P.string.isRequired
}
