import Link from 'next/link';

export default function Navbar() {
    return (
        < nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
            <a class="navbar-brand" href="#">Present List</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link href="/"><a class="nav-link">Home <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item active">
                        <Link href="/admin/homepage"><a class="nav-link">Admin</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}