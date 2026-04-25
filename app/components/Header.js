import Link from "next/link";
export default function Header() {
  return (
    <nav>
      <div  className="left">
        <img src="/logo.jpg" />
      <h2>HARI TECHNOLOGIES</h2>
      </div>
      <div className="right">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/login">Login</Link>
      </div>
        
    </nav>
  );
}