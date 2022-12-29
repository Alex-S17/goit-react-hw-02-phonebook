import React from "react";
import PropTypes from "prop-types";
import css from "./ContactItem.module.css";

export const ContactItem = ({ arrayOfContacts, onDeleteContact }) => (
  arrayOfContacts.map(contact => (
    <li className={css.contactWrapper} key={contact.id}>
      {contact.name}:{' '}
      {contact.number}
      <button
        className={css.buttonDelete}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  ))
);

ContactItem.propTypes = {
  arrayOfContacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};