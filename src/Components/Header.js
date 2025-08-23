import logo from '../assets/header_logo.png';

function Header() {
    return (
        <>
        <header>
            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;