import Link from "next/link";
import Navbar from "../component/Navbar";
import { Style } from "util"

export default function Contact(){
    return(
        <div>
            <Navbar></Navbar>

            <section style={{backgroundColor:"darkviolet",}}>
                <h1 style={{color:"black"}}>Hello from Contact Page</h1><br /><br />
            </section>
        </div>
    )
}