import { useState } from 'react';
import PropTypes from "prop-types";
import { nanoid } from "nanoid";


const Form = ({title, setContacts, contacts}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = (data) => {
    setContacts(contacts.concat(data))
  }

  const handleState = (e) => {
    const {name, value} = e.currentTarget
    if (name === 'name') {
      setName(value)
    }
    if (name === 'number') {
      setNumber(value)
    }
  }

  const checkContact = (e) => {
    if(contacts.some(e => e.name === name)) {
      alert('Контакт уже существует')
    } else if (name.trim() === '') {
      alert ('Пустой поле Name')
    } else if (number.trim() === '') {
      alert ('Пустое поле Tel')
    } else { addContact({ id: nanoid(), name, number }) }
    
  }

  const submitContact = e => {
    e.preventDefault();

    checkContact(e)
  }



  return <>
    <h1>{title}</h1>

    <form className="form">
    <label>
        <p>Name</p>
        <input
        className="form__input"
        onChange={handleState}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <label>
      <p>Tel</p>
      <input
        className="form__input"
        onChange={handleState}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
    <button className="form__button" onClick={submitContact}>
      Add contact
    </button>
  </form>
  </>
}

export default Form;

// Notification.propTypes = {
//   message: PropTypes.string,
// };


// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   submitContact = (e) => {
//     e.preventDefault();
//     const { state } = this;
//     const { addContact } = this.props;

//     if (state.name == "") {
//       return alert("пустой нейм");
//     } else if (state.number == "") {
//       return alert("пустой номер");
//     }

//     addContact({ name: state.name, number: state.number, id: nanoid() });
//   };

//   handleState = (e) => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   render() {
//     const title = this.props.title;

//     return (
//       <div>
//         <h1>{title}</h1>

//         <form className="form">
//           <label>
//             <p>Name</p>
//             <input
//               className="form__input"
//               onChange={this.handleState}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label>
//             <p>Tel</p>
//             <input
//               className="form__input"
//               onChange={this.handleState}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button className="form__button" onClick={this.submitContact}>
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// Form.propTypes = {
//   title: PropTypes.string,
//   addContact: PropTypes.func,
// };
