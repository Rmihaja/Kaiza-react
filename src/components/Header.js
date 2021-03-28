const Header = () => {

    // component
    return ( 
        <header className='row'>
            <h1 className="title">Kaiza</h1>
            <div className='row'>
                <button className="profile-picture">MR</button>
                <a target="_blank" rel="noreferrer" href="https://github.com/rmihaja/kaiza-react/">
                    <span className="material-icons">
                        code
                    </span>
                    <p>Github</p>
                </a>
            </div>
        </header>
     );
}
 
export default Header;