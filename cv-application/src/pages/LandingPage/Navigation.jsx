export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        <a href="/">QuickCV</a>
      </div>

      <ul className="nav-links">
        <li className="link-list">
          <a href="/" className="link">Home</a>
        </li>
        <li className="link-list">
          <a href="#how-it-works" className="link">How It Works</a>
        </li>
        <li className="link-list">
          <a href="#faq" className="link">FAQ</a>
        </li>
      </ul>

      <div className="nav-btn-container">
        <button type="button" className="menu-toggle">Menu</button>
        <button type="button" className="theme-toggle">Theme</button>
      </div>
    </nav>
  );
}
