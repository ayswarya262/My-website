import Link from "next/link";
export default function Header() {
  return (
    <nav>
      <div  className="left">
        <img src="/logo1.jpg" />
      <h2>HARI TECHNOLOGIES</h2>
      </div>
      <div className="right">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contactus">Contact Us</Link>
      </div>
        
    </nav>
  );
}