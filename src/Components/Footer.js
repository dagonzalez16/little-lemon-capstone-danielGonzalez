import logo from '../assets/footer_logo.png';

function FooterLinks() {
  return (
    <div className="footerLinks">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order online</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="footerContact">
      <ul>
        <li>Address</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>
    </div>
  );
}

function FooterSocialMedia() {
  return (
    <div className="footerSocialMedia">
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
        <img src={logo} alt="Logo" />
        <FooterLinks />
        <FooterContact />
        <FooterSocialMedia />
    </footer>
  );
}

export default Footer;