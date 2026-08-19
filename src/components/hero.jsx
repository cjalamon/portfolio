import './hero.css'
import profilePic from '../assets/profilepic.jpg'

function Hero(){
    return(
        <section className= "hero">
            <div className = "stars"></div>
            {/*<img src = {profilePic} alt ="CJ Alamon" className = "hero-picture" />*/}
            <p>CS Student @ University of Illinois at Chicago</p>
        </section>
    )
}

export default Hero