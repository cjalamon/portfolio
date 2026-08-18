import './header.css'

function Header(){
    return(
        <header className = "header">
        <h1 className = "header-name"> Carl Jacob Alamon</h1>
        <nav className ="header-nav">
            <a href = "#projects">Projects</a>
            <a href = "#skills">Skills</a>
            <a href = "#contact">Contact</a>
        </nav>
        </header>
    )
}

export default Header