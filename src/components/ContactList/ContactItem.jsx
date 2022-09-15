export const ContactItem = ({ name, number, onDeleteContact}) => {
    return (
        <li>
            <p>{name }</p>
            <p>{number}</p>
            <button type="button" onClick={onDeleteContact}>Delete contact</button>
        </li>
    )
}
