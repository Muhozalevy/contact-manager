function Footer() {
    return (
        <div style={{
            width: '100%',
  padding: '20px 0',
  marginTop: '50px', /* Donne de l'espace par rapport à la liste */
  borderTop: '1px solid #eeeeee', /* Petite ligne discrète */
  textAlign: 'center',
  color: '#777777', /* Gris doux pour ne pas agresser l'oeil */
  fontSize: '14px',
        }}>
            <footer className="footer-basique">
                <p>2026 Gestion Contacts — Tous droits réservés</p>
            </footer>
        </div>
    )
}
export default Footer