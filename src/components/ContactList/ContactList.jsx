import css from './ContactList.module.css';

const ContactList = ({ contacts, filter, deleteContact, children }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Sprawdź, czy filtr pasuje do jakiegokolwiek kontaktu
  const isFilterMatch = filteredContacts.length > 0;

  // Jeśli filtr nie pasuje do żadnego kontaktu, zwróć pustą listę
  if (!isFilterMatch) {
    return null;
  }

  return (
    <div>
      <h2>Contacts</h2>
      {children}
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
            <button
              className={css.btn_delete}
              onClick={() => deleteContact(id)}
            >
              Usuń z listy kontaktów
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
