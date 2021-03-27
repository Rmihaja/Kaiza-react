const NavSection = ({ name, tabsList }) => {
    return ( 
        <div className="NavSection">
            <h1 className="nav-category">{name}</h1>
            <div>
                {tabsList.map(tab => (
                    <a id={tab.id} href="#">
                        <span className="material-icons">
                            { tab.icon }
                        </span>    
                        <p>{tab.name}</p>
                    </a>
                ))}
            </div>
        </div>
     );
}
 
export default NavSection;