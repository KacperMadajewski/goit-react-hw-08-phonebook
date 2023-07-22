import Styles from './ContactsForm.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(addContact({ name, phone }));
  // };
const handleSubmit = ev => {
  ev.preventDefault();
  const existingName = contacts.find(
    value => value.name.toLowerCase() === name.toLowerCase()
  );
  existingName
    ? alert(`Unfortunately name: ${name} allready exist in this contacts!`)
    : dispatch(addContact({ name, phone }));
};


  const handleChange = ev => {
    if (ev.target.name === 'name') {
      setName(ev.target.value);
    } else if (ev.target.name === 'phone') {
      setPhone(ev.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <span>Name</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
        placeholder="Write Your name"
        className={Styles.input}
      />
      <span>Number</span>
      <input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={phone}
        placeholder="Write Your number"
        className={Styles.input}
      />
      <button type="submit" className={Styles.btn}>
        Add contact
      </button>
    </form>
  );
};

ContactsForm.propTypes = {
  onChange: PropTypes.func,
  forSubmit: PropTypes.func,
  name: PropTypes.any,
  number: PropTypes.any,
};
