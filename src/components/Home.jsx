import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
export default function Home() {
  return (
    <>
    <div className='home' id="home">
        <main>
            <h1>SpiderCorp.</h1>
            <p>Innovating the world</p>
        </main>
    </div>
    <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems
                you face
                every day. We are leading tech company whose aim is to increase the 
                problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repellendus. Laudantium, quae voluptates beatae cum dolores inventore nobis sunt magni ducimus iste natus modi accusamus est distinctio repellat assumenda vel aliquid, nulla minus officia consequuntur commodi voluptatum optio saepe! Suscipit molestias vel quasi quos fugit possimus cupiditate aliquid aut nesciunt! Ut commodi temporibus id necessitatibus ducimus magnam quam, at eum, sapiente cum amet eligendi.</p>
        </div>
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>

        </div>
    </div>

    </>
    
  )
}
