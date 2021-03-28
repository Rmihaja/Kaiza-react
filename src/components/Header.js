const Header = () => {

    // component
    return ( 
        <header className='row'>
            <div className="row">
                <a href="#root" className="menu-open icon">
                    <span className="material-icons">
                        menu
                    </span>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="menu-close icon">
                    <span className="material-icons">
                        close
                    </span>
                </a>
                <h1 className="title">Kaiza</h1>
            </div>
            <div className='row'>
                <button className="profile-picture">MR</button>
                <a target="_blank" rel="noreferrer" href="https://github.com/rmihaja/kaiza-react/">
                    <span className="material-icons" style={{color: "var(--text)"}}>
                        code
                    </span>
                    <p>Repo Github</p>
                </a>
            </div>
        </header>
     );
}
 
export default Header;