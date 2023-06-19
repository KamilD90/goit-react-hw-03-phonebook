import Form from './form/Form.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './filter/Filter.jsx';
import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  filterContacts = value => {
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSubmit = contact => {
    const { name } = contact;
    const isContactExists = this.state.contacts.some(
      c => c.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert('Kontakt o takim imieniu już istnieje!');
      return;
    }

    const newContact = { ...contact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    console.log('render');
    const { contacts, filter } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}></Form>
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        >
          <Filter filterContacts={this.filterContacts} />
        </ContactList>
      </div>
    );
  }
}

export default App;
