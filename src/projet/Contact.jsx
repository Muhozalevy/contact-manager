import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

export default function Contact() {
    const [contacts, setContacts] = useState([]);

    const onDelete = (idSupp) => {
        // Approche immuable par filtrage (conforme à tes préférences 2026)
        setContacts(contacts.filter((contact) => contact.id !== idSupp));
    };
    // Dans ton composant Contact.js, ajoute cette fonction :

    const onUpdate = (id, updatedNom, updatedTel) => {
        setContacts(contacts.map(contact =>
            contact.id === id
                ? { ...contact, nom: updatedNom, telephone: updatedTel }
                : contact
        ));
    };

    return (
        <div className="App">
            <Header />
            <main>
                <ContactForm contacts={contacts} setContacts={setContacts} />
                <ContactList contacts={contacts} onDelete={onDelete} onUpdate={onUpdate} />
            </main>
            <Footer />
        </div>
    );
}