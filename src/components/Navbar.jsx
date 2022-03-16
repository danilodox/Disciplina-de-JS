import "./navbar.css";

const Navbar = () => {

    const handleClick = () => {
        alert("Not implemented yet!");
    }

    return (
        <div className="navbar">
            <div className="container">
                <div style={{marginLeft: "10px", fontWeight: "bold"}}>
                    Notícias
                </div>
            </div>
            <div className="logo">
                <h2>Noticiário UEPB</h2>
            </div>
            <div className="container" style={{justifyContent: "flex-end"}}>
                <div className="loginButton" onClick={handleClick}>
                    Entrar
                </div>
            </div>
        </div>
    )
}

export default Navbar;