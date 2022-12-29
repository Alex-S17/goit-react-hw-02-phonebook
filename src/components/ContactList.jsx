import { Component } from "react";
import PropTypes from "prop-types";
import { ContactItem } from "./ContactItem";
import css from "./ContactsList.module.css";

export class ContactsList extends Component {
  render() {
    const { arrayOfContacts, onDeleteContact } = this.props;
    return (
      <ul className={css.contactsList}>
        <ContactItem
          arrayOfContacts={arrayOfContacts}
          onDeleteContact={onDeleteContact}
        />
      </ul>
    );
  };
};

ContactsList.propTypes = {
  arrayOfContacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
