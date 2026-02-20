import ContactCard from './ContactCard';
export default function ContactList({ contacts, onDelete, onUpdate }) {
    return (
        <div className="contact-grid">
            {contacts.map((contact) => (
                <ContactCard 
                    key={contact.id} 
                    contact={contact} 
                    onDelete={onDelete} 
                    onUpdate={onUpdate} 
                />
            ))}
        </div>
    );
}