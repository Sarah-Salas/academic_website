import { useState } from "react"; // Import useState
import { Link } from "react-router";
import "./layout.css";

export function Layout({ children }: { children?: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Sarah Salas</h1>
          {/* Hamburger Icon */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Nav Bar with dynamic "open" class */}
          <nav className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/cv" onClick={() => setIsMenuOpen(false)}>CV</Link>
            
            {/* Hiding these for now:
    <Link to="/outreach">Outreach</Link>
    <Link to="/resources">Resources</Link> 
  */}
          </nav>
        </div>
      </div>
      
      <main className="page-content">{children}</main>
      
      <div className="site-footer">
        <div className="footer-content">
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <p>
              Department of Sociology</p>
              <p>3321 Sewell Social Sciences</p>
              <p>1180 Observatory Drive</p>
              <p>Madison, WI 53706</p>
              <p>
                <a href="mailto:sssalas@wisc.edu">sssalas@wisc.edu</a>
              </p>
          </div> 
      
      
          <div className="footer-column footer-links">
            <a href="https://scholar.google.com/citations?user=JCegi68AAAAJ&hl=en&oi=ao" target="_blank">
            Google Scholar
            </a>
            <a href="https://orcid.org/0000-0002-8119-6345" target="_blank">
              ORCID
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
