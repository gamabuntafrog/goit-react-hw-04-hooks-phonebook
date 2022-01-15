import PropTypes from "prop-types";

const Contacts = ({ title, contacts, setContacts }) => {
  const OnDeleteItem = (id) => {
    setContacts(contacts.filter((e) => e.id !== id))
  };

  return (
    <div>
      <h1>{title}</h1>
      <ul className="contacts">
      {contacts.map((el) => {
        return (
          <li className="contacts__item" key={el.id}>
            <div>
              <h3>
                {el.name}: {el.number}
              </h3>
            </div>
            <button
              className="contacts__button"
              onClick={() => OnDeleteItem(el.id)}
            >
              Удалить контакт
            </button>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  OnDeleteItem: PropTypes.func,
};

export default Contacts;
