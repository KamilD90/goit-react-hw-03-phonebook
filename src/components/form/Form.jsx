import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    console.log(`name: ${name}, Number: ${number}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Imię:</label>
        <input
          id="name"
          value={name}
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Z]+([-'\\s][a-zA-Z]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Numer telefonu:</label>
        <input
          id="number"
          value={number}
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="^[a-zA-Z]+([-'\\s][a-zA-Z]+)*$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Dodaj do kontaktów</button>
      </form>
    );
  }
}

export default Form;
