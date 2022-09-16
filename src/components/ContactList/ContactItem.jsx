import PropTypes from 'prop-types';
import { BtnDelete } from './Contact.styled';

export const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
        <li>
            <p>{name }</p>
            <p>{number}</p>
            <BtnDelete type="button" onClick={onDeleteContact}>Delete contact</BtnDelete>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}