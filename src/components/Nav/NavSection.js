import { Link } from "react-router-dom";

const NavSection = ({ name, tabsList }) => {
    return ( 
        <div className="NavSection">
            <h1 className="nav-category">{name}</h1>
            <div>
                {tabsList.map(tab => (
                    <Link to={`/chats/${tab.id}`}>
                        <span className="material-icons">
                            {tab.icon}
                        </span>    
                        <p>{tab.name}</p>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default NavSection;