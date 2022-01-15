import PropTypes from "prop-types";

const Filter = ({ setFilter }) => {
  
  const handleFilterChange = e => {
    setFilter(e.currentTarget.value)
  }

  return (
    <div className="filter">
      <h2>Find contacts by name</h2>
      <input
        className="filter__input"
        onChange={handleFilterChange}
        name="filter"
        type="text"
      ></input>
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func,
};

export default Filter;
