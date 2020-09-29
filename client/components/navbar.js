import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href="/"><a className="navbar-brand">Present List</a></Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link href="/admin/homepage"><a className="nav-link">Admin</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}