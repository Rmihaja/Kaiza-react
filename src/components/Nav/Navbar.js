import useFetch from "../../hooks/useFetch";
import NavSection from "./NavSection";

const Navbar = () => {
    
    const { data: groupChatTabs, isFetching, error } = useFetch('http://localhost:8000/chats'); 

    return ( 
        <nav>
            {/* activity section */}
            <h1 class="nav-category">Activités</h1>
            <a href="/" class="active"><p>Annonces</p></a>
            
            {/* group section */}
            <NavSection name="Groupes" tabsList={groupChatTabs} />
            
            {/* people section */}
            <h1 class="nav-category">Conversations</h1>
            <a href="/contacts/add"><p>Ajouter un contact</p></a>
        </nav>
     );
}
 
export default Navbar;