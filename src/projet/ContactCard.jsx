import { useState } from 'react';
import './card.css';

function ContactCard({ contact, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(contact.nom);
    const [newTel, setNewTel] = useState(contact.telephone);

    const handleSave = () => {
        onUpdate(contact.id, newName, newTel);
        setIsEditing(false);
    };

    return (
        <div className={`card-container ${isEditing ? 'editing' : ''}`}>
            <div className="info">
                {isEditing ? (
                    <>
                        <input 
                            className="edit-input"
                            value={newName} 
                            onChange={(e) => setNewName(e.target.value)} 
                        />
                        <input 
                            className="edit-input"
                            value={newTel} 
                            onChange={(e) => setNewTel(e.target.value)} 
                        />
                    </>
                ) : (
                    <>
                        <h4>Nom : <span>{contact.nom}</span></h4>
                        <h4>Tel : <span>{contact.telephone}</span></h4>
                    </>
                )}
            </div>

            <div className="button-group">
                {isEditing ? (
                    <button className="btn btn-save" onClick={handleSave}>Enregistrer</button>
                ) : (
                    <button className="btn btn-edit" onClick={() => setIsEditing(true)}>Modifier</button>
                )}
                <button className="btn btn-delete" onClick={() => onDelete(contact.id)}>
                    {isEditing ? "Annuler" : "Supprimer"}
                </button>
            </div>
        </div>
    );
}

export default ContactCard;