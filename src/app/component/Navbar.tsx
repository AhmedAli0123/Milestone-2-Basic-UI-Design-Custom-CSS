import Link from "next/link"

export default function Navbar(){
    return(
        <div style={{display:"flex", justifyContent:"space-evenly",textAlign:"center" ,color:"black", backgroundColor:"white" ,height:"40px"}}>
            <Link href="/home">Home</Link><br />
            <Link href="/about">About</Link><br />
            <Link href="/job">Jobs</Link><br />
            <Link href="/job/programming">Programming</Link><br />
            <Link href="/Contact">Contact</Link>
        </div>
    );
};