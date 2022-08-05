export default function Menu() {
    return (
        <header>

            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled">Disabled</a>
                    </div>
                    </div>

                </div>

            </nav>

        </header>
    )
} 
