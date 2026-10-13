import type { Project } from "@/data/projects";
import { Activity, ArrowDown, ArrowRight, Boxes, ChartColumnIncreasing, Database, FileText, HeartPulse, MessageSquareText, Package, ScanFace, Server, TrendingUp } from "lucide-react";

/** Illustrations purement décoratives : aucune capture ou donnée sensible de projet. */
export function ProjectArtwork({ variant, compact = false }: { variant: Project["visual"]; compact?: boolean }) {
  const color = `art-${variant}`;
  return (
    <div className={`project-art ${color} ${compact ? "art-compact" : ""}`} aria-hidden="true">
      <div className="art-halo art-halo-one" />
      <div className="art-halo art-halo-two" />
      {variant === "warehouse" && (
        <div className="art-panel pipeline-panel">
          <div className="art-panel-title"><span className="art-pulse" /> DATA PIPELINE <span className="mini-bars">▮ ▮ ▮</span></div>
          <div className="pipeline">
            <div className="pipeline-node"><FileText size={23} /><span>Source</span></div>
            <ArrowRight className="pipeline-arrow" size={18}/>
            <div className="pipeline-node"><Database size={23} /><span>Warehouse</span></div>
            <ArrowRight className="pipeline-arrow" size={18}/>
            <div className="pipeline-node"><ChartColumnIncreasing size={23} /><span>Insights</span></div>
          </div>
          <div className="art-progress"><span /><span /><span /><span /><span /></div>
          <div className="art-small-caption">EXTRACT <span>→</span> TRANSFORM <span>→</span> VISUALIZE</div>
        </div>
      )}
      {variant === "nlp" && (
        <div className="art-panel nlp-panel">
          <div className="art-panel-title"><span className="art-pulse" /> NLP / SENTIMENT</div>
          <div className="nlp-sample"><MessageSquareText size={18}/><span>« هادشي زوين بزاف ناضييي  »</span></div>
          <div className="nlp-bars"><span className="nlp-positive" /><span className="nlp-neutral" /><span className="nlp-negative" /></div>
          <div className="nlp-legend"><span>POSITIF</span><strong>NEUTRE</strong><span>NÉGATIF</span></div>
          <div className="nlp-footer">BERTDARIJA <span className="nlp-chip">NLP</span></div>
        </div>
      )}
      {variant === "bi" && (
        <div className="art-panel bi-panel">
          <div className="art-panel-title"><HeartPulse size={16}/> ANALYTICS OVERVIEW</div>
          <div className="bi-topline"><div><small>DATA INSIGHTS</small><strong>BI / ETL</strong></div><TrendingUp size={24}/></div>
          <div className="bi-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div>
          <div className="bi-base"><span>INTEGRATE</span><span>MODEL</span><span>EXPLORE</span></div>
        </div>
      )}
      {variant === "sales" && (
        <div className="art-panel sales-panel">
          <div className="art-panel-title"><Package size={16}/> INVENTORY MANAGER <span>•••</span></div>
          <div className="sales-grid">
            <div className="sales-cell"><Boxes size={22}/><small>Produits</small><strong>Catalogue</strong></div>
            <div className="sales-cell"><Activity size={22}/><small>Ventes</small><strong>Analyses</strong></div>
          </div>
          <div className="sales-line"><span/><span/><span/><span/></div>
          <div className="art-small-caption">SPRING BOOT <span>·</span> MYSQL <span>·</span> REST API</div>
        </div>
      )}
      {variant === "vision" && (
        <div className="art-panel vision-panel">
          <div className="art-panel-title"><ScanFace size={16}/> COMPUTER VISION <span>● LIVE</span></div>
          <div className="vision-view"><div className="vision-ring"><ScanFace size={76} strokeWidth={1.1}/></div><div className="vision-target" /><div className="vision-corner tl"/><div className="vision-corner tr"/><div className="vision-corner bl"/><div className="vision-corner br"/></div>
          <div className="art-small-caption"><Server size={14}/> IMAGE <ArrowDown size={12}/> DETECTION</div>
        </div>
      )}
    </div>
  );
}
