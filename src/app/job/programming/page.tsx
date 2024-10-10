import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import { Style } from "util"

export default function Programming()  {
  return (
    <div>
        <Navbar></Navbar>
        <section  style={{backgroundColor:"purple"}}>
          <h1>Hello from Programming Page</h1><br /><br />
        </section>
    </div>

  );
}
