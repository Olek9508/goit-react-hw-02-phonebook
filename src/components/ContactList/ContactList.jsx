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