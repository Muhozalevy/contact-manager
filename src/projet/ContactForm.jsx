import { useState } from "react";
import './form.css';

function ContactForm({ contacts, setContacts }) {
  const [nom, setNom] = useState('');
  const [telephone, setTel] = useState('');
  const [error, setError] = useState('');

  function soumission(e) {
    e.preventDefault(); 
    const exist = contacts.some(contact => contact.telephone === telephone);

    if (!exist) {
      setError('');
      setContacts(prev => [...prev, { id: Date.now(), nom, telephone }]);
      setNom('');
      setTel('');
    } else {
      setError('Ce numéro existe déjà');
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={soumission}>
        <h3>Ajouter un Contact</h3>
        <input type="text" value={nom} required placeholder="Nom complet" onChange={(e) => setNom(e.target.value)} />
        <input type="number" value={telephone} placeholder="Numéro de téléphone" required onChange={(e) => setTel(e.target.value)} />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit" className="btn-submit">Ajouter</button>
      </form>
    </div>
  );
}
export default ContactForm;