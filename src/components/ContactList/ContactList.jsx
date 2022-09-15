import PropTypes from 'prop-types';
import { ContactItem } from "./ContactItem"

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <ul>
        {contacts.map(({ id, name, number })=>
            <ContactItem
            key={id}
            name = {name}
            number = {number}    
            onDeleteContact = {()=>onDeleteContact(id)}
            />
        )}    
    </ul>
)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired})
    ),
    onDeleteContact:PropTypes.func.isRequired,
}