import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { site } from "@/data/site";
export function Footer() {
  return <footer className="footer"><div className="site-container footer-top"><div className="footer-identity"><span className="footer-monogram">IF<span></span></span><p>Des données aux solutions qui ont du sens.</p></div><div className="footer-links"><Link href="/#projets">Projets</Link><Link href="/#expertises">Expertises</Link><Link href="/cv">CV FR / EN</Link><Link href="/#contact">Contact <ArrowUpRight size={14}/></Link></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} {site.name}. Portfolio personnel.</span></div></footer>;
}
