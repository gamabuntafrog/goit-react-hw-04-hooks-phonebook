import "./App.css";
import { useState, useEffect } from 'react'
import Form from "./Components/Form";
import Contacts from "./Components/Contacts";
import Filter from "./Components/Filter";




const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const visibleContacts = () => {
    return contacts.filter((el) => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  useEffect(() => {
    let localStorageData = localStorage.getItem('contacts');

    if (localStorageData) {
      setContacts(JSON.parse(localStorageData))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return <div className='App'>
    <Form title='Phonebook' setContacts={setContacts} contacts={contacts} />
    <Filter setFilter={setFilter} />
    <Contacts title='Contacts' contacts={visibleContacts()} setContacts={setContacts}/>
  </div>
}







export default App;











// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   OnDeleteItem = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((e) => e.id !== id),
//     }));
//   };

//   addContact = (data) => {
//     if (this.state.contacts.some((e) => e.name === data.name)) {
//       alert("Такой контакт уже сущетсвует");
//     } else {
//       this.setState({
//         contacts: this.state.contacts.concat(data),
//       });
//     }
//   };

//   handleState = (e) => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   visibleContacts = () => {
//     return this.state.contacts.filter((el) => {
//       return el.name.includes(this.state.filter);
//     });
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'))

//     if (contacts) {
//       this.setState({contacts: contacts})
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <Form title={"Phonebook"} addContact={this.addContact} />
//         <h1>Contacts</h1>
//         <Filter handleState={this.handleState} />
//         <Contacts
//           contacts={this.visibleContacts()}
//           handleState={this.handleState}
//           OnDeleteItem={this.OnDeleteItem}
//         />
//       </div>
//     );
//   }
// }
