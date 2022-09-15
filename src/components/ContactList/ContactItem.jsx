import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
        <li>
            <p>{name }</p>
            <p>{number}</p>
            <button type="button" onClick={onDeleteContact}>Delete contact</button>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}