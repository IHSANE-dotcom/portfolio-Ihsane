import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <main id="contenu" className="not-found site-container"><span>ERREUR 404</span><h1>Cette page est introuvable<span>.</span></h1><p>Le lien demandé n'existe plus ou comporte une erreur.</p><Link className="button accent" href="/"><ArrowLeft size={17}/> Retour à l'accueil</Link></main>}
