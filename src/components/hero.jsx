import './hero.css'
import profilePic from '../assets/profilepic.jpg'
import {useState, useEffect} from 'react'


const taglines = [
    "3rd Year CS Student @ University of Illinois at Chicago",
    "Aspiring Full-Stack Developer",
    "Undergraduate Researcher @ Trailblazer Labs",
]
function Hero(){
    const[index, setIndex]= useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])
    return(
        <section className= "hero">
            <div className = "stars"></div>
            <div className = "wrap">
                <div className = "ticker">
                    <span>3rd Year CS Student @ University of Illinois at Chicago&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>3rd Year CS Student @ University of Illinois at Chicago&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
                <h1> Hey, I'm CJ! </h1>
                <p key = {index} className ="tagline">{taglines[index]}</p>
        </section>
    )
}

export default Hero