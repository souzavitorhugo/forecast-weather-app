import { Link } from 'react-router-dom'

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
                            
                            <Link to="/cidade">
                                <span class="nav-link"> Ver outras Cidades </span>
                            </Link>
            
                        </div>
                    </div>

                </div>

            </nav>

        </header>
    )
} 
