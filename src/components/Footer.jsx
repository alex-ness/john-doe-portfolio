import react from "react";

export default function Footer() {
    return (
        <footer className="footer bg-dark text-light py-4 mt-5 ">
            <div className="container">
                <div className="row gy-3">
                    <div className="col-md-4">
                        <h4>John Doe</h4>
                        <p className="mb-1">2 rue Kellerman, 59100 Roubaix</p>
                        <p className="mb-1">+33 6 12 34 56 78</p>
                        <p className="mb-0"><a href="mailto:john.doe@example.com" className="text-light" rel="nofollow">john.doe@example.com</a></p>
                        <div className="mt-2"><a href="https://github.com/alex-ness" target="_blank" rel="noopener noreferrer nofollow" className="me-3 social-icon text-light"><i className=" bi bi-github"></i></a>
                        <a href="https://twitter.com/profil" target="_blank" rel="noopener noreferrer nofollow" className="me-3 social-icon text-light"><i className="bi bi-twitter"></i></a>
                        <a href="https://linkedin.com/in/profil" target="_blank" rel="noopener noreferrer nofollow" className="social-icon text-light"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Liens</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Accueil</a></li>
                            <li><a href="/services" className="text-light">Services</a></li>
                            <li><a href="/portfolio" className="text-light">Portfolio</a></li>
                            <li><a href="/contact" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Dernières réalisation</h5>
                        <ul className="list-unstyled">
                            <li><a href="/portfolio" className="text-light">Site vitrine React</a></li>
                            <li><a href="/portfolio" className="text-light">E-commerce UI</a></li>
                            <li><a href="/portfolio" className="text-light">App ToDo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3 small" aria-hidden="true">
                      © {new Date().getFullYear()} John Doe — Tous droits réservés
                </div>
            </div>
        </footer>
    );
}