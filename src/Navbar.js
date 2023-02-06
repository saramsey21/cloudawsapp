import "./styles.css"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Sarahs Cloud App</a>
        <ul>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/signup">Signup</a>
            </li>
        </ul>
    </nav>
}