import Navbar from "./component/Navbar";
import Link from "next/link";
import { Style } from "util"

export default function mainPage(){
    return(
        <div>
            <Navbar></Navbar>
            <h1>This Is Main Page </h1>
        </div>
    )
}