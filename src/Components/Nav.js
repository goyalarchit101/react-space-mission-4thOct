function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* navbar icon */}
            <a className="navbar-brand" href="/navbar">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* this is for navbar items */}
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Contact us </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Missions</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

