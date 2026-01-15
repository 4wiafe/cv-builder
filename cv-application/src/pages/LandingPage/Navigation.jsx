export default function Navigation({ menuButton, themeButton }) {
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
          <a href="#signin" className="link">Sign in</a>
        </li>
        <li className="link-list">
          <a href="#signup" className="link">Sign up</a>
        </li>
      </ul>

      <div className="nav-btn-container">
        {menuButton}
        {themeButton}
      </div>
    </nav>
  );
}
