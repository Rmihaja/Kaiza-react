import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import NavSection from "./NavSection";

const Navbar = () => {
    
    const { data: groupChatTabs, isFetching, error } = useFetch('http://localhost:8000/chats'); 

    return ( 
        <nav>
            {/* activity section */}
            <h1 class="nav-category">Activités</h1>
            <Link to="/" class="active">
                <span class="material-icons">
                    campaign
                </span>
                <p>Annonces</p>
            </Link>
            
            {/* group section */}
            <NavSection name="Groupes" tabsList={groupChatTabs} />
            
            {/* people section */}
            <h1 class="nav-category">Conversations</h1>
            <Link to="/contacts/add">
                <span class="material-icons">
                    person_add
                </span>
                <p>Ajouter un contact</p>
            </Link>
        </nav>
     );
}
 
export default Navbar;