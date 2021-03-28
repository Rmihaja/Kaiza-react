import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <section className="info">
            <span className="material-icons">
                error
            </span>
            <h4>Erreur 404 - Votre lien est invalide</h4>
            <Link className="padding" to="/"><p>Revenir à l'accueil</p></Link>
        </section>
     );
}
 
export default NotFound;