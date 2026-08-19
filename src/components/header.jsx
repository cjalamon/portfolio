import './header.css'
function Header(){
    return(
        <header className = "header">
        <h1 className = "header-name"> CJ Alamon</h1>
        <nav className ="header-nav">
            <a href = "#home">Home</a>
            <a href = "#about">About</a>
            <a href = "#projects">Projects</a>
            <a href = "#contact">Contact</a>
        </nav>
        </header>

    )
}

export default Header