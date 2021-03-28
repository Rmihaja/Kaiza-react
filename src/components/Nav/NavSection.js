import { Link } from "react-router-dom";

const NavSection = ({ name, tabsList }) => {
    return ( 
        <div className="NavSection">
            <h1 className="nav-category">{name}</h1>
            <ul>
                {tabsList.map(tab => (
                    <li key={tab.id}>
                        <Link to={`/chats/${tab.id}`}>
                            <span className="material-icons">
                                {tab.icon}
                            </span>    
                            <p>{tab.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default NavSection;