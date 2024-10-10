import Link from "next/link"
import Navbar from "../component/Navbar"
import { link } from "fs"
import { Style } from "util"

export default function About(){
    return(   
    <div>
        <Navbar></Navbar>
        <section style={{backgroundColor:"yellowgreen"}}>
            <h1>Hello from About Page</h1><br /><br />
        </section>
    </div>
    )
}