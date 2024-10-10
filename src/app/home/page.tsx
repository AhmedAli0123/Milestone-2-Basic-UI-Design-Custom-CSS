import  Link  from "next/link";
import { Style } from "util"
import Navbar from '@/app/component/Navbar'

export default function Home()  {
  return (
    <div>
        <Navbar></Navbar>
        <section  style={{backgroundColor:"gray"}}>
          <h1>Hello from Home Page</h1><br /><br />
        </section>
    </div>

  );
}
